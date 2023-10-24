import { Test, TestingModule } from '@nestjs/testing';

import { GenerateNowDateUseCase } from './generate-now-date.use-case';

describe('GenerateNowDateUseCase', () => {
	let useCase: GenerateNowDateUseCase;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GenerateNowDateUseCase],
		}).compile();

		useCase = await module.resolve(GenerateNowDateUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return new Date()', async () => {
			jest.useFakeTimers().setSystemTime(new Date('1429-06-11'));

			const generatedDate = useCase.execute();

			expect(generatedDate).toBeInstanceOf(Date);
			expect(generatedDate.toISOString()).toBe('1429-06-11T00:00:00.000Z');
		});
	});
});
