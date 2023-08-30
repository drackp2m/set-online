import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { GameFaker } from '../factory/game.faker';
import { Game } from '../game.entity';
import { GameRepository } from '../game.repository';

import { ListGamesUseCase } from './list-games.use-case';

describe('ListGamesUseCase', () => {
	let useCase: ListGamesUseCase;
	const gameRepository = mock<GameRepository>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ListGamesUseCase, { provide: GameRepository, useValue: gameRepository }],
		}).compile();

		useCase = await module.resolve<ListGamesUseCase>(ListGamesUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return Game array', async () => {
			const fakeGames = GameFaker.make(10);

			gameRepository.getMany.mockResolvedValueOnce(fakeGames);

			const games = await useCase.execute();

			expect(games[0]).toBeInstanceOf(Game);
		});
	});
});
