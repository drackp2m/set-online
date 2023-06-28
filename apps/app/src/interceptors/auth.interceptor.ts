import {
	HttpClient,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private isInvalidToken = false;
	private tokenRefreshed$: Subject<void> = new Subject<void>();

	constructor(private readonly httpClient: HttpClient) {}

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (req.url === '/api/refresh-session') return next.handle(req);

		return next.handle(req).pipe(
			switchMap((event) => {
				if (event instanceof HttpResponse) {
					const isUnauthorizedError =
						event.body?.errors && event.body.errors[0].message === 'Unauthorized';

					if (isUnauthorizedError) {
						if (!this.isInvalidToken) {
							this.isInvalidToken = true;

							return this.refreshToken().pipe(
								switchMap(() => {
									this.isInvalidToken = false;

									this.tokenRefreshed$.next();

									return next.handle(req);
								}),
								catchError((refreshError) => {
									this.isInvalidToken = false;

									throwError(() => new Error(refreshError));

									// ToDo => redirect to login page
									return of(refreshError);
								}),
							);
						} else {
							return this.tokenRefreshed$.pipe(
								switchMap(() => {
									return next.handle(req);
								}),
							);
						}
					}
				}

				return of(event);
			}),
		);
	}

	private refreshToken(): Observable<void> {
		return this.httpClient.get<void>('/api/refresh-session');
	}
}
