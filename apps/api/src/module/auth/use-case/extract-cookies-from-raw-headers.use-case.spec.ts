import { Test, TestingModule } from '@nestjs/testing';

import { ExtractCookiesFromRawHeadersUseCase } from './extract-cookies-from-raw-headers.use-case';

describe('ExtractCookiesFromRawHeadersUseCase', () => {
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
		it('should returns empty object when is called with empty array', () => {
			const cookies = useCase.execute([]);

			expect(cookies).toStrictEqual({});
		});

		it('should returns empty object when is called with array that does not contain Cookies', () => {
			const cookies = useCase.execute(['NotCookie', 'no-data']);

			expect(cookies).toStrictEqual({});
		});

		it('should returns object with one header when is called with array contains Cookie with one header', () => {
			const cookies = useCase.execute(['Cookie', 'x-jwt-access-token=fake-access-token']);

			expect(cookies).toStrictEqual({ 'x-jwt-access-token': 'fake-access-token' });
		});

		it('should returns object with two header when is called with array contains Cookie with two header', () => {
			const cookies = useCase.execute([
				'Cookie',
				'x-jwt-access-token=fake-access-token; x-jwt-refresh-token=fake-refresh-token',
			]);

			expect(cookies).toStrictEqual({
				'x-jwt-access-token': 'fake-access-token',
				'x-jwt-refresh-token': 'fake-refresh-token',
			});
		});
	});
});
