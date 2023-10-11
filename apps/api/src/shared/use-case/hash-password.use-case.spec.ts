import { Test, TestingModule } from '@nestjs/testing';

import { HashPasswordUseCase } from './hash-password.use-case';

describe('HashPasswordUseCase', () => {
	let useCase: HashPasswordUseCase;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [HashPasswordUseCase],
		}).compile();

		useCase = await module.resolve(HashPasswordUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return a text of 60 characters in length starting with "$2a$12$"', async () => {
			const hashedPassword = await useCase.execute('password');

			expect(hashedPassword).toHaveLength(60);
			expect(hashedPassword.substring(0, 7)).toStrictEqual('$2a$12$');
		});
	});
});
