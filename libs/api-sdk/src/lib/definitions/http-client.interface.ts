import { Observable } from 'rxjs';

export interface HttpClient {
	get<T>(url: string, options?: unknown): Observable<T>;

	post<T>(url: string, body: unknown, options?: unknown): Observable<T>;
}
