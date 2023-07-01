import { ApiSDK } from './api-sdk';

describe('apiSdk', () => {
	it('should work', () => {
		expect(new ApiSDK()).toBeInstanceOf(ApiSDK);
	});
});
