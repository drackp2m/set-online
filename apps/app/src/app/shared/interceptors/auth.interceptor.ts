import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthStore } from '../../stores/auth.store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private readonly authStore = inject(AuthStore);
	private readonly router = inject(Router);

	private readonly API_REFRESH_SESSION_URL = '/api/auth/refresh-session';
	private readonly API_REGISTER_URL = '/api/auth/register';
	private readonly API_LOGIN_URL = '/api/auth/login';

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const urlsToIgnore = [this.API_REFRESH_SESSION_URL, this.API_REGISTER_URL, this.API_LOGIN_URL];

		if (urlsToIgnore.some((url) => req.url.includes(url))) return next.handle(req);

		if (!this.authStore.tokensAreValid) {
			if (!this.authStore.isLoading) {
				return new Observable<HttpEvent<unknown>>();
			}

			return this.retryRequest(req, next);
		}

		return next.handle(req).pipe(
			switchMap((event) => {
				if (!(event instanceof HttpResponse)) return of(event);

				const isUnauthorizedError =
					event.body?.errors && event.body.errors[0].message === 'Unauthorized';

				if (!isUnauthorizedError) return of(event);

				return this.retryRequest(req, next, event);
			}),
			catchError((error: HttpEvent<unknown>) => {
				if (!(error instanceof HttpErrorResponse)) return of(error);

				const isUnauthorizedError = error.status === 401;

				if (isUnauthorizedError) return of(error);

				return this.retryRequest(req, next, error);
			}),
		);
	}

	private retryRequest(
		req: HttpRequest<unknown>,
		next: HttpHandler,
		event?: HttpEvent<unknown>,
	): Observable<HttpEvent<unknown>> {
		if (event) {
			this.authStore.tryToRefreshTokens();
		}

		return this.authStore.loadingIsFinished$.pipe(
			switchMap(() => {
				if (event && !this.authStore.tokensAreValid) {
					this.router.navigate(['/login']);

					// return of(event);

					return new Observable<HttpEvent<unknown>>();
				} else {
					return next.handle(req);
				}
			}),
		);
	}
}
