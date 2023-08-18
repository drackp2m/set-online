import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InMemoryCache, split } from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { OperationDefinitionNode } from 'graphql';
import { createClient } from 'graphql-ws';

import { environment } from '../environments/environment';
import { AuthInterceptor } from '../shared/interceptors/auth.interceptor';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
	declarations: [AppComponent],
	imports: [
		RouterOutlet,
		RouterModule.forRoot(APP_ROUTES, { useHash: true }),
		BrowserModule,
		HttpClientModule,
		ApolloModule,
	],
	providers: [
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
						// connectionParams: () => {
						// 	return {
						// 		Authorization: `caca ${22}`,
						// 	};
						// },
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
							fetchPolicy: 'network-only',
							errorPolicy: 'none',
						},
						query: {
							fetchPolicy: 'network-only',
							errorPolicy: 'none',
						},
						mutate: {
							fetchPolicy: 'network-only',
							errorPolicy: 'none',
						},
					},
					cache: new InMemoryCache(),
					connectToDevTools: true,
				};
			},
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
