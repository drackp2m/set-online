import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { AuthInterceptor } from '../interceptors/auth.interceptor';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';

@NgModule({
	declarations: [AppComponent],
	imports: [
		RouterOutlet,
		RouterModule.forRoot(APP_ROUTES),
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
				// https://www.apollographql.com/docs/react/api/core/ApolloClient/
				return {
					name: 'angular',
					link: httpLink.create({
						uri: '/graphql',
					}),
					defaultOptions: {
						query: {
							fetchPolicy: 'network-only',
							errorPolicy: 'none',
						},
						watchQuery: {
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
