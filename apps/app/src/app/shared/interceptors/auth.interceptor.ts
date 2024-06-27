import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';

import { AuthStore } from '../../stores/auth.store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private readonly authStore = inject(AuthStore);
	private readonly router = inject(Router);

	private readonly API_REFRESH_SESSION_URL = '/api/auth/refresh-session';
	private readonly API_REGISTER_URL = '/api/auth/register';
	private readonly API_LOGIN_URL = '/api/auth/login';

	private readonly authStoreLoadingFinished$ = toObservable(this.authStore.isLoading).pipe(
		filter((value) => value === false),
	);

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const urlsToIgnore = [this.API_REGISTER_URL, this.API_LOGIN_URL, this.API_REFRESH_SESSION_URL];

		if (urlsToIgnore.some((url) => req.url.includes(url))) {
			return next.handle(req);
		}

		return next.handle(req).pipe(
			catchError((error: HttpEvent<unknown>) => {
				return this.handleErrorOrEvent(req, next, error);
				// if (error instanceof HttpErrorResponse === false) {
				// 	return of(error);
				// }

				// const isUnauthorizedError = error.status === 401;

				// if (isUnauthorizedError === true && this.authStore.data()?.tokensAreValid === undefined) {
				// 	return this.retryRequest(req, next, error);
				// }

				// return of(error);
			}),
			switchMap((event) => {
				return this.handleErrorOrEvent(req, next, event);
				// console.log('map');
				// if (event instanceof HttpResponse === false) {
				// 	return of(event);
				// }

				// const isUnauthorizedError = event.body?.errors?.[0]?.message === 'Unauthorized';

				// if (isUnauthorizedError === true && this.authStore.data()?.tokensAreValid === undefined) {
				// 	return this.retryRequest(req, next, event);
				// }

				// return of(event);
			}),
		);
	}

	handleErrorOrEvent(
		req: HttpRequest<unknown>,
		next: HttpHandler,
		event?: unknown,
	): Observable<HttpEvent<unknown>> {
		const isHttpErrorResponse = event instanceof HttpErrorResponse;
		const isHttpResponse = event instanceof HttpResponse;

		if (isHttpErrorResponse === false && isHttpResponse === false) {
			return of(event as HttpResponse<unknown>);
		}

		const isUnauthorizedError = isHttpErrorResponse
			? event.status === 401
			: event.body?.errors?.[0]?.message === 'Unauthorized';

		if (isUnauthorizedError && this.authStore.data()?.tokensAreValid === undefined) {
			return this.retryRequest(req, next, event as HttpResponse<unknown>);
		}

		return of(event as HttpResponse<unknown>);
	}

	private retryRequest(
		req: HttpRequest<unknown>,
		next: HttpHandler,
		event?: HttpEvent<unknown>,
	): Observable<HttpEvent<unknown>> {
		if (event !== undefined) {
			void this.authStore.tryToRefreshTokens();
		}

		return this.authStoreLoadingFinished$.pipe(
			take(1),
			switchMap(() => {
				if (this.authStore.data()?.tokensAreValid === false) {
					void this.router.navigate(['/login']);

					return new Observable<HttpEvent<unknown>>();
				}

				return next.handle(req);
			}),
		);
	}
}
