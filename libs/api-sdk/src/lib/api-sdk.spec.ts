import { ApiSDK } from './api-sdk';

describe('apiSdk', () => {
	const httpClient = {
		get: jest.fn(),
		post: jest.fn(),
	};

	it('should work', () => {
		expect(new ApiSDK('url', httpClient)).toBeInstanceOf(ApiSDK);
	});
});
