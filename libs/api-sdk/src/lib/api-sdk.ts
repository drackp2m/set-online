import { HttpClient } from './definitions/http-client.interface';
import { AuthSDK } from './models/auth/auth.sdk';
import { DefaultSDK } from './models/default/default.sdk';

export class ApiSDK {
	constructor(private readonly client: HttpClient) {}

	get default() {
		return new DefaultSDK(this.client);
	}

	get auth() {
		return new AuthSDK(this.client);
	}
}
