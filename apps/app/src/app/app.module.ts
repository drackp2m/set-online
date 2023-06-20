import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { AppComponent } from './app.component';
import { DirectivesModule } from './directives/directives.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
	declarations: [AppComponent, NxWelcomeComponent],
	imports: [BrowserModule, HttpClientModule, ApolloModule, DirectivesModule, ReactiveFormsModule],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory(httpLink: HttpLink) {
				return {
					cache: new InMemoryCache(),
					link: httpLink.create({
						uri: 'graphql',
					}),
				};
			},
			deps: [HttpLink],
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
