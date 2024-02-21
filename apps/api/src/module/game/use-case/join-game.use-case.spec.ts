import { MikroORM } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/postgresql';
import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { UserFaker } from '../../user/factory/user.faker';
import { GameStatus } from '../definition/game-status.enum';
import { GameFaker } from '../factory/game.faker';
import { GameRepository } from '../game.repository';
import { GameParticipantRepository } from '../relations/game-participant.repository';

import { JoinGameUseCase } from './join-game.use-case';

describe('CreateGameUseCase', () => {
	let useCase: JoinGameUseCase;
	const gameRepository = mock<GameRepository>();
	const gameParticipantRepository = mock<GameParticipantRepository>();

	beforeAll(async () => {
		await MikroORM.init(
			defineConfig({
				clientUrl: 'postgresql://user:pass@localhost/db_name',
				entities: ['apps/api/src/module/**/*.entity.ts'],
				connect: false,
			}),
		);

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				JoinGameUseCase,
				{ provide: GameRepository, useValue: gameRepository },
				{ provide: GameParticipantRepository, useValue: gameParticipantRepository },
			],
		}).compile();

		useCase = await module.resolve(JoinGameUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should throw PreconditionFailedException when current Game exists', async () => {
			const fakeGame = GameFaker.makeOne();
			const fakeUser = UserFaker.makeOne();

			gameRepository.getOne
				.calledWith({
					participants: { uuid: fakeUser.uuid },
					status: { $in: [GameStatus.WaitingOpponents, GameStatus.InProgress] },
				})
				.mockResolvedValueOnce(fakeGame);

			const game = useCase.execute(fakeGame.uuid, fakeUser);

			expect(game).rejects.toThrow(PreconditionFailedException);
			expect(game).rejects.toMatchObject({ response: { user: 'already in a game' } });

			expect(gameRepository.getOne).toHaveBeenCalledTimes(2);
			expect(gameRepository.getOne).toHaveBeenCalledWith({
				participants: { uuid: fakeUser.uuid },
				status: { $in: [GameStatus.WaitingOpponents, GameStatus.InProgress] },
			});
		});

		it('should throw NotFoundException when target Game not exists', async () => {
			const fakeGame = GameFaker.makeOne();
			const fakeUser = UserFaker.makeOne();

			gameRepository.getOne
				.calledWith({
					participants: { uuid: fakeUser.uuid },
					status: { $in: [GameStatus.WaitingOpponents, GameStatus.InProgress] },
				})
				.mockRejectedValue(new NotFoundException('not exists', 'game'));

			gameRepository.getOne
				.calledWith({
					uuid: fakeGame.uuid,
				})
				.mockRejectedValue(new NotFoundException('not exists', 'game'));

			gameRepository.getOne.mockRejectedValue(new NotFoundException('not exists', 'game'));

			const game = useCase.execute(fakeGame.uuid, fakeUser);

			await expect(game).rejects.toThrow(NotFoundException);
			expect(game).rejects.toMatchObject({ response: { game: 'not exists' } });

			expect(gameRepository.getOne).toHaveBeenCalledTimes(2);
			expect(gameRepository.getOne).toHaveBeenNthCalledWith(1, {
				participants: { uuid: fakeUser.uuid },
				status: { $in: [GameStatus.WaitingOpponents, GameStatus.InProgress] },
			});
			expect(gameRepository.getOne).toHaveBeenNthCalledWith(2, {
				uuid: fakeGame.uuid,
			});
		});
	});
});
