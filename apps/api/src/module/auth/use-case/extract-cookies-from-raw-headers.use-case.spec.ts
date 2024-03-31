import { Test, TestingModule } from '@nestjs/testing';

import { ExtractCookiesFromRawHeadersUseCase } from './extract-cookies-from-raw-headers.use-case';

describe('ExtractCookiesFromRawHeadersUseCaseFromRawHeaders', () => {
	let useCase: ExtractCookiesFromRawHeadersUseCase;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [ExtractCookiesFromRawHeadersUseCase],
		}).compile();

		useCase = await module.resolve(ExtractCookiesFromRawHeadersUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('calls with empty string should returns empty object ', async () => {
			const cookies = useCase.execute('');

			expect(cookies).toEqual({});
		});
	});

	// it('calls once to cookie when called with type refresh ', async () => {
	// 	const tokenType: JwtCookie = JwtCookie.refresh;
	// 	const tokenValue = 'fake-refresh-token';

	// 	useCase.execute(tokenType, tokenValue);

	// 	expect(request.res.cookie).toHaveBeenCalledTimes(1);
	// 	expect(request.res.cookie).toHaveBeenCalledWith(tokenType, tokenValue, {
	// 		signed: true,
	// 		secure: true,
	// 		httpOnly: true,
	// 		sameSite: true,
	// 		path: '/api/auth/refresh-session',
	// 		domain: 'localhost',
	// 	});
	// });
});
