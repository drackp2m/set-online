import { Test, TestingModule } from '@nestjs/testing';

import { CleanJwtAccessTokenCookieUseCase } from './clean-jwt-access-token-cookie.use-case';

describe('CleanJwtAccessTokenCookieUseCase', () => {
	let useCase: CleanJwtAccessTokenCookieUseCase;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CleanJwtAccessTokenCookieUseCase],
		}).compile();

		useCase = await module.resolve(CleanJwtAccessTokenCookieUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return input when token not contain colon character', () => {
			const cookies = useCase.execute('');

			expect(cookies).toStrictEqual('');
		});

		it('should return right part when token contain colon character', () => {
			const cookies = useCase.execute('s%3AfirstPart');

			expect(cookies).toStrictEqual('firstPart');
		});

		it('should return three parts when token contain colon character', () => {
			const cookies = useCase.execute('s%3AfirstPart.secondPart.thirdPart.fourthPart');

			expect(cookies).toStrictEqual('firstPart.secondPart.thirdPart');
		});
	});
});
