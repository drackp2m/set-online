import { JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { select } from '@ngneat/elf';

import { CurrentUserStore } from '../../../stores/current-user.store';
import { MediaDebugComponent } from '../../components/media-debug/media-debug.component';
import { ApiClient } from '../../services/api-client.service';
import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS, Apollo } from 'apollo-angular';
import { InMemoryCache, split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationDefinitionNode } from 'graphql';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { environment } from '../../../environments/environment';
import { HttpLink } from 'apollo-angular/http';
import { createClient } from 'graphql-ws';
import { GetUserInfoGQL } from '../../../graphql/apollo-operations';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrl: './main.layout.scss',
	imports: [
    RouterModule,
    NgTemplateOutlet,
    MediaDebugComponent,
    NgIf,
    JsonPipe,
    HttpClientModule,
  ],
  providers: [
    CurrentUserStore,
    GetUserInfoGQL,
    Apollo,
    ApiClient,
    HttpLink,
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
		},]
})
export default class MainLayout {
	user = toSignal(this.currentUserStore.state$.pipe(select((state) => state.data)));
	userError = toSignal(this.currentUserStore.state$.pipe(select((state) => state.error)));

	constructor(
		private readonly apiClient: ApiClient,
		private readonly router: Router,
		private readonly currentUserStore: CurrentUserStore,
	) {
		this.currentUserStore.fetchData();
	}

	logout() {
		return () =>
			this.apiClient.auth.get('/logout').subscribe({
				next: () => {
					this.currentUserStore.reset();

					this.router.navigate(['/login']);
				},
			});
	}
}
