import {
	HttpClient,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	private isPaused = false;
	private pausedRequestsQueue: ReplaySubject<HttpRequest<unknown>> = new ReplaySubject<
		HttpRequest<unknown>
	>();

	constructor(private readonly httpClient: HttpClient) {}

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.isPaused && req.url !== '/api/refresh-session') {
			console.log('adding request to queue');

			this.pausedRequestsQueue.next(req);

			return new Observable<HttpEvent<unknown>>();
		}

		return next.handle(req).pipe(
			map((event) => {
				if (event instanceof HttpResponse) {
					if (event.body?.errors) {
						console.log('pausing requests');

						this.isPaused = true;

						this.refreshToken().subscribe({
							next: () => {
								console.log('success refreshing token');

								this.isPaused = false;
								this.pausedRequestsQueue.next(req);

								this.resumeRequests(next);
							},
							error: (refreshError) => {
								console.log('error refreshing token');
								this.isPaused = false;

								return throwError(() => new Error(refreshError));
							},
						});
					}
				}

				return event;
			}),
		);
	}

	private refreshToken(): Observable<void> {
		return this.httpClient.get<void>('/api/refresh-session');
	}

	private resumeRequests(next: HttpHandler): void {
		const requests: HttpRequest<unknown>[] = [];

		this.pausedRequestsQueue.subscribe((request) => {
			console.log(request);
			requests.push(request);
		});

		this.pausedRequestsQueue = new ReplaySubject<HttpRequest<unknown>>();

		requests.forEach((request) => {
			next.handle(request).subscribe();
		});
	}
}
