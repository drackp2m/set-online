import { NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

import { GetUsersGQL } from '../../graphql/apollo-operations';
import { HoverSrcDirective } from '../../shared/directives/img-hover-src.directive';
import { ApiClient } from '../../shared/services/api-client.service';

import ExampleMenuComponent from './shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './example.page.html',
	styleUrl: './example.page.scss',
	imports: [ExampleMenuComponent, HoverSrcDirective, ReactiveFormsModule, NgIf],
	providers: [ApiClient, GetUsersGQL, Apollo],
})
export default class ExamplePage {
	private readonly apiClient = inject(ApiClient);
	private readonly getUsersGQL = inject(GetUsersGQL);
	private readonly apollo = inject(Apollo);

	private readonly hello$ = this.apiClient.default.get('/hello');

	hello = toSignal<string, string>(this.hello$.pipe(map((data) => data.message)), {
		initialValue: 'An error ocurred',
	});

	data = signal<string | undefined>(undefined);

	getManySubscription = signal<string | undefined>(undefined);

	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	checkUsers(): void {
		this.getUsersGQL.fetch().subscribe({
			next: (data) => {
				this.data.set(`Now: ${data.data.getUsers.length} users.`);
			},
			error: (error) => {
				this.data.set(error.message);
			},
		});
	}

	initSubscription(): void {
		this.apollo
			.subscribe<{ getManySubscription: string }>({
				query: gql`
					subscription Subscription {
						getManySubscription
					}
				`,
			})
			.subscribe({
				next: (data) => {
					if (data.data) {
						this.getManySubscription.set(data.data.getManySubscription);
					}
				},
				error: (error) => {
					this.getManySubscription.set(error.message);
				},
			});
	}
}
