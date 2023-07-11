import { HttpClient as HttpClientType } from './definitions/http-client.type';
import { HttpClient } from './http-client';
import { AuthSDK } from './models/auth/auth.sdk';
import { DefaultSDK } from './models/default/default.sdk';

export class ApiSDK {
	constructor(private readonly apiUrl: string, private readonly client: HttpClientType) {
		HttpClient.initialize(apiUrl, client);
	}

	get default() {
		return new DefaultSDK();
	}

	get auth() {
		return new AuthSDK();
	}
}
