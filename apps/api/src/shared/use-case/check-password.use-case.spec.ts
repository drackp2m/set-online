import { Test, TestingModule } from '@nestjs/testing';

import { CheckPasswordUseCase } from './check-password.use-case';

describe('CheckPasswordUseCase', () => {
	let useCase: CheckPasswordUseCase;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CheckPasswordUseCase],
		}).compile();

		useCase = await module.resolve(CheckPasswordUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return false when password not match', async () => {
			const passwordMatch = await useCase.execute(
				'password',
				'$2a$12$iOm3t8Z8HeY1didYbQdbnuYepl1zCaDB6linWecn8HKpwPaZ/CMum',
			);

			expect(passwordMatch).toStrictEqual(false);
		});

		it('should return true when password match', async () => {
			const passwordMatch = await useCase.execute(
				'password',
				'$2a$12$iOm3t8Z8HeY1didYbQdbnuYegl1zCaDB6linWecn8HKpwPaZ/CMum',
			);

			expect(passwordMatch).toStrictEqual(true);
		});
	});
});
