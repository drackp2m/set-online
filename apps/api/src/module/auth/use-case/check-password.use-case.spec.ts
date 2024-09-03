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
				'$2a$11$zQOT4wlF6dbzcRJMmmUsHeVw7J2JszWek8OQjoy.BgdlhdMq2FiaX',
			);

			expect(passwordMatch).toStrictEqual(false);
		});

		it('should return true when password match', async () => {
			const passwordMatch = await useCase.execute(
				'password',
				'$2a$11$PLgxt3KSescTNC9xhmzeWu9OKNKZhi2WA29a4suuemdHWm2oHnikS',
			);

			expect(passwordMatch).toStrictEqual(true);
		});
	});
});
