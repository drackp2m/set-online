import { Observable } from 'rxjs';

import { HttpClient } from '../../definitions/http-client.interface';

import { AuthGet } from './auth-get.interface';
import { AuthPost } from './auth-post.interface';

export class AuthSDK {
	private readonly API_PREFIX = '/api';

	constructor(private readonly httpClient: HttpClient) {}

	get<Endpoint extends keyof AuthGet>(
		endpoint: Endpoint,
	): Observable<AuthGet[Endpoint]['response']> {
		return this.httpClient.get<AuthGet[Endpoint]['response']>(`${this.API_PREFIX}${endpoint}`);
	}

	post<Endpoint extends keyof AuthPost>(
		endpoint: Endpoint,
		...[request]: AuthPost[Endpoint]['payload']
	): Observable<AuthPost[Endpoint]['response']> {
		return this.httpClient.post<AuthPost[Endpoint]['response']>(
			`${this.API_PREFIX}${endpoint}`,
			request,
		);
	}
}
