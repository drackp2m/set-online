import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, computed, signal } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { InMemoryCache, split } from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { OperationDefinitionNode } from 'graphql';
import { createClient } from 'graphql-ws';

import { APP_ROUTES } from './app.routes';
import { environment } from './environments/environment';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

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

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withInterceptorsFromDi()),
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
		{
			deps: [HttpLink],
			provide: APOLLO_OPTIONS,
			useFactory(httpLink: HttpLink) {
				const http = httpLink.create({
					uri: `${environment.apiUrl}/graphql`,
				});

				const ws = new GraphQLWsLink(
					createClient({
						url: `${environment.wsUrl}/graphql`,
						connectionAckWaitTimeout: 1000,
						keepAlive: 5000,
						on: {
							connected: (x, y, z) => {
								console.log({ x, y, z });
							},
							ping: (a, b) => {
								pingTimestamp.set(new Date().getTime());

								console.log({ a, b });
							},
							pong: (c, d) => {
								pongTimestamp.set(new Date().getTime());
								console.log('pong received...');

								console.log({ c, d });
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
			},
		},
		provideRouter(APP_ROUTES, withHashLocation()),
	],
};
