import { Test, TestingModule } from '@nestjs/testing';

import { GenerateGameCardsUseCase } from './generate-game-cards.use-case';

describe('GenerateGameCardsUseCase', () => {
	let useCase: GenerateGameCardsUseCase;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GenerateGameCardsUseCase],
		}).compile();

		useCase = await module.resolve(GenerateGameCardsUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should generate 81 cards', () => {
			const cards = useCase.execute();

			expect(cards.length).toStrictEqual(81);
			expect(cards).toStrictEqual([
				':a1::b1::c1::d1:',
				':a1::b1::c1::d2:',
				':a1::b1::c1::d3:',
				':a1::b1::c2::d1:',
				':a1::b1::c2::d2:',
				':a1::b1::c2::d3:',
				':a1::b1::c3::d1:',
				':a1::b1::c3::d2:',
				':a1::b1::c3::d3:',
				':a1::b2::c1::d1:',
				':a1::b2::c1::d2:',
				':a1::b2::c1::d3:',
				':a1::b2::c2::d1:',
				':a1::b2::c2::d2:',
				':a1::b2::c2::d3:',
				':a1::b2::c3::d1:',
				':a1::b2::c3::d2:',
				':a1::b2::c3::d3:',
				':a1::b3::c1::d1:',
				':a1::b3::c1::d2:',
				':a1::b3::c1::d3:',
				':a1::b3::c2::d1:',
				':a1::b3::c2::d2:',
				':a1::b3::c2::d3:',
				':a1::b3::c3::d1:',
				':a1::b3::c3::d2:',
				':a1::b3::c3::d3:',
				':a2::b1::c1::d1:',
				':a2::b1::c1::d2:',
				':a2::b1::c1::d3:',
				':a2::b1::c2::d1:',
				':a2::b1::c2::d2:',
				':a2::b1::c2::d3:',
				':a2::b1::c3::d1:',
				':a2::b1::c3::d2:',
				':a2::b1::c3::d3:',
				':a2::b2::c1::d1:',
				':a2::b2::c1::d2:',
				':a2::b2::c1::d3:',
				':a2::b2::c2::d1:',
				':a2::b2::c2::d2:',
				':a2::b2::c2::d3:',
				':a2::b2::c3::d1:',
				':a2::b2::c3::d2:',
				':a2::b2::c3::d3:',
				':a2::b3::c1::d1:',
				':a2::b3::c1::d2:',
				':a2::b3::c1::d3:',
				':a2::b3::c2::d1:',
				':a2::b3::c2::d2:',
				':a2::b3::c2::d3:',
				':a2::b3::c3::d1:',
				':a2::b3::c3::d2:',
				':a2::b3::c3::d3:',
				':a3::b1::c1::d1:',
				':a3::b1::c1::d2:',
				':a3::b1::c1::d3:',
				':a3::b1::c2::d1:',
				':a3::b1::c2::d2:',
				':a3::b1::c2::d3:',
				':a3::b1::c3::d1:',
				':a3::b1::c3::d2:',
				':a3::b1::c3::d3:',
				':a3::b2::c1::d1:',
				':a3::b2::c1::d2:',
				':a3::b2::c1::d3:',
				':a3::b2::c2::d1:',
				':a3::b2::c2::d2:',
				':a3::b2::c2::d3:',
				':a3::b2::c3::d1:',
				':a3::b2::c3::d2:',
				':a3::b2::c3::d3:',
				':a3::b3::c1::d1:',
				':a3::b3::c1::d2:',
				':a3::b3::c1::d3:',
				':a3::b3::c2::d1:',
				':a3::b3::c2::d2:',
				':a3::b3::c2::d3:',
				':a3::b3::c3::d1:',
				':a3::b3::c3::d2:',
				':a3::b3::c3::d3:',
			]);
		});
	});
});
