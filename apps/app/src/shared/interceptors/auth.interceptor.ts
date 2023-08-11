import {
	HttpClient,
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private readonly API_REFRESH_SESSION_URL = '/api/auth/refresh-session';
	private readonly API_LOGIN_URL = '/api/auth/login';

	private tokenIsValid = true;
	private jwtTokensRefreshed$: Subject<void> = new Subject<void>();

	constructor(
		private readonly httpClient: HttpClient,
		private readonly router: Router,
	) {}

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const urlsToIgnore = [this.API_REFRESH_SESSION_URL, this.API_LOGIN_URL];

		if (urlsToIgnore.includes(req.url)) return next.handle(req);

		if (!this.tokenIsValid) {
			return this.jwtTokensRefreshed$.pipe(switchMap(() => next.handle(req)));
		}

		return next.handle(req).pipe(
			switchMap((event) => {
				if (!(event instanceof HttpResponse)) return of(event);

				const isUnauthorizedError =
					event.body?.errors && event.body.errors[0].message === 'Unauthorized';

				if (!isUnauthorizedError) return of(event);

				this.tokenIsValid = false;

				return this.tryToRefreshToken<HttpResponse<unknown>>(req, next, event);
			}),
			catchError((error) => {
				if (!(error instanceof HttpErrorResponse)) return of(error);

				const isUnauthorizedError = 401 !== error.status;

				if (isUnauthorizedError) return of(error);

				this.tokenIsValid = false;

				return this.tryToRefreshToken(req, next, error);
			}),
		);
	}

	private tryToRefreshToken<T>(
		req: HttpRequest<unknown>,
		next: HttpHandler,
		event: unknown,
	): Observable<T> {
		return this.refreshJwtTokens().pipe(
			switchMap(() => {
				this.tokenIsValid = true;

				this.jwtTokensRefreshed$.next();

				return next.handle(req) as Observable<T>;
			}),
			catchError(() => {
				this.tokenIsValid = true;

				this.router.navigate(['/login']);

				return of(event) as Observable<T>;
			}),
		);
	}

	private refreshJwtTokens(): Observable<void> {
		return this.httpClient.get<void>(this.API_REFRESH_SESSION_URL);
	}
}
