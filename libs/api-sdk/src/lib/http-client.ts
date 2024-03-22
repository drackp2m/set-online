import { HttpClient as HttpClientType } from './definitions/http-client.type';

export class HttpClient {
	private static instance: HttpClient;

	private constructor(
		private readonly apiURL: string,
		private readonly client: HttpClientType,
	) {
		console.log(`Set Online SDK is running on ${apiURL}.`);
	}

	static initialize(baseURL: string, client: HttpClientType): void {
		if (!HttpClient.instance) {
			HttpClient.instance = new HttpClient(baseURL, client);
		}
	}

	static get apiUrl() {
		return this.getInstance().apiURL;
	}

	static get execute() {
		return this.getInstance().client;
	}

	private static getInstance(): HttpClient {
		if (!HttpClient.instance) {
			throw Error('SDK not initialized');
		}

		return HttpClient.instance;
	}
}
