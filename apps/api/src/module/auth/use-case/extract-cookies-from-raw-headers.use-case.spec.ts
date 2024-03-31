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
		it('should returns empty object when is called with empty array', async () => {
			const cookies = useCase.execute([]);

			expect(cookies).toEqual({});
		});

		it('should returns empty object when is called with array that does not contain Cookies', async () => {
			const cookies = useCase.execute(['NotCookie', 'no-data']);

			expect(cookies).toEqual({});
		});

		it('should returns object with one header when is called with array contains Cookie with one header', async () => {
			const cookies = useCase.execute(['Cookie', 'x-jwt-access-token=fake-access-token']);

			expect(cookies).toEqual({ 'x-jwt-access-token': 'fake-access-token' });
		});

		it('should returns object with two header when is called with array contains Cookie with two header', async () => {
			const cookies = useCase.execute([
				'Cookie',
				'x-jwt-access-token=fake-access-token; x-jwt-refresh-token=fake-refresh-token',
			]);

			expect(cookies).toEqual({
				'x-jwt-access-token': 'fake-access-token',
				'x-jwt-refresh-token': 'fake-refresh-token',
			});
		});
	});
});
