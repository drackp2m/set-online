import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { GenerateNowDateUseCase } from '../../../shared/use-case/generate-now-date.use-case';
import { GenerateUuidUseCase } from '../../../shared/use-case/generate-uuid.use-case';
import { EditableDate } from '../../../shared/util/editable-date';
import { UserFaker } from '../../user/factory/user.faker';
import { GameFaker } from '../factory/game.faker';
import { Game } from '../game.entity';
import { GameRepository } from '../game.repository';
import { GameParticipant } from '../relations/game-participant.entity';
import { GameParticipantRepository } from '../relations/game-participant.repository';

import { CreateGameUseCase } from './create-game.use-case';

describe('CreateGameUseCase', () => {
	let useCase: CreateGameUseCase;
	const gameRepository = mock<GameRepository>();
	const gameParticipantRepository = mock<GameParticipantRepository>();

	beforeAll(async () => {
		// await MikroORM.init(
		// 	defineConfig({
		// 		clientUrl: 'postgresql://user:pass@localhost/db_name',
		// 		entities: [Game],
		// 	}),
		// 	false,
		// );

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CreateGameUseCase,
				{ provide: GameRepository, useValue: gameRepository },
				{ provide: GameParticipantRepository, useValue: gameParticipantRepository },
			],
		}).compile();

		useCase = await module.resolve<CreateGameUseCase>(CreateGameUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should throw PreconditionFailedException when GameRepository.getOne returns value', async () => {
			const fakeGame = GameFaker.makeOne();
			const fakeUser = UserFaker.makeOne();

			gameRepository.getOne.mockResolvedValueOnce(fakeGame);

			const game = useCase.execute(fakeUser);

			expect(game).rejects.toThrow(PreconditionFailedException);
			expect(game).rejects.toMatchObject({ response: { user: 'already in a game' } });

			expect(gameRepository.getOne).toBeCalledTimes(1);
			expect(gameRepository.getOne).toBeCalledWith({
				participants: { uuid: fakeUser.uuid },
			});
		});

		it('should return Game instance with specified Participant', async () => {
			const fakeUuid = 'f858b7c7-a260-4760-b6e3-b90e66557d3c';
			jest.spyOn(GenerateUuidUseCase, 'execute').mockReturnValue(fakeUuid);

			const fakeDate = new EditableDate();
			jest.spyOn(GenerateNowDateUseCase, 'execute').mockReturnValue(fakeDate);

			const expiresOn = new EditableDate(fakeDate).edit('day', 1);

			const fakeGame = GameFaker.makeOne({
				uuid: fakeUuid,
				tableCards: ['a', 'b', 'c'],
				deckCards: ['d', 'e', 'f'],
				expiresOn,
				createdAt: fakeDate,
				updatedAt: fakeDate,
			});
			const fakeUser = UserFaker.makeOne();

			fakeGame.participants.add(fakeUser);

			const participant = new GameParticipant({ game: fakeGame, user: fakeUser });

			gameRepository.getOne.mockRejectedValueOnce(new NotFoundException());
			gameParticipantRepository.insert.mockResolvedValueOnce(participant);

			const game = await useCase.execute(fakeUser);

			expect(game).toBeInstanceOf(Game);
			expect(game.participants).toContain(fakeUser);

			expect(gameRepository.getOne).toBeCalledTimes(1);
			expect(gameRepository.getOne).toBeCalledWith({
				participants: { uuid: fakeUser.uuid },
			});

			expect(gameParticipantRepository.insert).toBeCalledTimes(1);
			expect(gameParticipantRepository.insert).toBeCalledWith(participant);
		});
	});
});
