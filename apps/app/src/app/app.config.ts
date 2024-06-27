import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { InMemoryCache, split } from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { OperationDefinitionNode } from 'graphql';
import { Client, createClient } from 'graphql-ws';

import { APP_ROUTES } from './app.routes';
import { environment } from './environments/environment';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

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
				let client: Client;

				const http = httpLink.create({
					uri: `${environment.apiUrl}/graphql`,
				});

				const ws = new GraphQLWsLink(
					(client = createClient({
						url: `${environment.wsUrl}/graphql`,
						connectionAckWaitTimeout: 1000,
						keepAlive: 5000,
						on: {
							connected: (x, y, z) => {
								console.log({ x, y, z });

								console.log({ client });
							},
							ping: (a, b) => {
								console.log({ a, b });
							},
							pong: (c, d) => {
								// console.log(apollo);

								// sendPingToServer(client);

								console.log({ c, d });

								const items: string[] = [];

								const notExist = items[99];

								console.log(notExist);
							},
						},
					})),
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

function _sendPingToServer(client: Client): void {
	console.log('Sending ping from client...');

	client.subscribe(
		{
			query: `mutation {
				sendPing(input: { pingValue: 22 }) {
				}
			}`,
		},
		{
			next: (data) => console.log(data),
			error: (error) => console.error(error),
			complete: () => console.log('done'),
		},
	);
}
