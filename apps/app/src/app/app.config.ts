import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
	ApplicationConfig,
	computed,
	inject,
	isDevMode,
	provideExperimentalCheckNoChangesForDebug,
	provideExperimentalZonelessChangeDetection,
	signal,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { OperationDefinitionNode } from 'graphql';
import { createClient } from 'graphql-ws';

import { environment } from '../environments/environment';

import { APP_ROUTES } from './app.routes';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { WithCredentialsInterceptor } from './shared/interceptors/with-credentials.interceptor';

const pingTimestamp = signal<number | undefined>(undefined);

const pongTimestamp = signal<number | undefined>(undefined);

export const pingValue = computed(() => {
	const pingTimestampValue = pingTimestamp();
	const pongTimestampValue = pongTimestamp();

	if (pongTimestampValue === undefined || pingTimestampValue === undefined) {
		return undefined;
	}

	const ping = pongTimestampValue - pingTimestampValue;

	return ping > 0 ? ping : undefined;
});

const apolloConfig = (): ApolloClientOptions<unknown> => {
	const httpLink = inject(HttpLink);

	const http = httpLink.create({
		uri: `${environment.apiUrl}/graphql`,
	});

	const ws = new GraphQLWsLink(
		createClient({
			url: `${environment.wsUrl}/graphql`,
			connectionAckWaitTimeout: 1000,
			keepAlive: 5000,
			on: {
				connected: (_x, _y, _z) => {
					// console.log({ _x, _y, _z });
				},
				ping: (_a, _b) => {
					pingTimestamp.set(new Date().getTime());

					// console.log({ _a, _b });
				},
				pong: (_c, _d) => {
					pongTimestamp.set(new Date().getTime());

					// console.log({ _c, _d });
				},
			},
		}),
	);

	const link = split(
		({ query }) => {
			const { kind, operation } = getMainDefinition(query) as OperationDefinitionNode;

			return kind === 'OperationDefinition' && operation === 'subscription';
		},
		ws,
		http,
	);

	// https://www.apollographql.com/docs/react/api/core/ApolloClient/
	return {
		name: 'set-online',
		link,
		defaultOptions: {
			watchQuery: {
				fetchPolicy: 'no-cache',
				errorPolicy: 'none', // none | ignore | all
			},
			query: {
				fetchPolicy: 'no-cache',
				errorPolicy: 'none',
			},
			mutate: {
				fetchPolicy: 'no-cache',
				errorPolicy: 'none',
			},
		},
		cache: new InMemoryCache(),
		connectToDevTools: true,
	};
};

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withInterceptorsFromDi()),
		provideRouter(APP_ROUTES, withHashLocation()),
		provideServiceWorker('ngsw-worker.js', {
			enabled: !isDevMode(),
			registrationStrategy: 'registerWhenStable:30000',
		}),
		provideExperimentalZonelessChangeDetection(),
		provideExperimentalCheckNoChangesForDebug({
			exhaustive: true,
			interval: 500,
		}),
		provideApollo(apolloConfig),
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: WithCredentialsInterceptor,
			multi: true,
		},
	],
};
