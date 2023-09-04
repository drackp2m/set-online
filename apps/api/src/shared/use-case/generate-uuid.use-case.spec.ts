import { GenerateUuidUseCase } from './generate-uuid.use-case';

describe('GenerateUuidUseCase', () => {
	describe('execute', () => {
		it('should return a valid v4 uuid', () => {
			const uuid = GenerateUuidUseCase.execute();

			expect(uuid).toMatch(
				/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
			);
		});
	});
});
