import { Observable } from 'rxjs';

export type HttpClient = {
	get<T>(url: string, options?: unknown): Observable<T>;

	post<T>(url: string, body: unknown, options?: unknown): Observable<T>;
};
