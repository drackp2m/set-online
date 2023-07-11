import { Observable } from 'rxjs';

import { Request } from '../definitions/request.type';
import { HttpClient } from '../http-client';

export class GetRequester<T extends Request> {
	execute<Endpoint extends keyof T>(
		endpoint: Endpoint,
		...[request]: T[Endpoint]['payload']
	): Observable<T[Endpoint]['response']> {
		return HttpClient.execute.get<T[Endpoint]['response']>(
			`${HttpClient.apiUrl}${endpoint.toString()}`,
			request,
		);
	}
}
