import { Test, TestingModule } from '@nestjs/testing';

import { GenerateUuidUseCase } from './generate-uuid.use-case';

describe('GenerateUuidUseCase', () => {
	let useCase: GenerateUuidUseCase;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [GenerateUuidUseCase],
		}).compile();

		useCase = await module.resolve(GenerateUuidUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return a valid v4 uuid', () => {
			const uuid = useCase.execute();

			expect(uuid).toMatch(
				/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
			);
		});
	});
});
