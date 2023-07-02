import { Observable } from 'rxjs';

import { HttpClient } from '../../definitions/http-client.interface';

import { DefaultGet } from './default-get.interface';

export class DefaultSDK {
	private readonly API_PREFIX = '/api';

	constructor(private readonly httpClient: HttpClient) {}

	get<Endpoint extends keyof DefaultGet>(
		endpoint: Endpoint,
	): Observable<DefaultGet[Endpoint]['response']> {
		console.log(`${this.API_PREFIX}${endpoint}`);

		return this.httpClient.get<DefaultGet[Endpoint]['response']>(`${this.API_PREFIX}${endpoint}`);
	}
}
