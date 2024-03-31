import { NgIf } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core';
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

	users: WritableSignal<number | undefined> = signal(undefined);

	apolloSubscription = signal<{ getManySubscription: string }>({ getManySubscription: '' });

	response!: string;
	error!: string;

	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	checkUsers(): void {
		this.getUsersGQL.fetch().subscribe({
			next: (data) => {
				this.users.set(data.data.getUsers.length);
			},
			error: (error) => {
				this.show(error.message, true);
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
			.subscribe((data) => {
				if (data.data) {
					this.apolloSubscription.set(data.data);
				}
			});
	}

	private show(message: string, error = false) {
		this.response = error ? '' : message;
		this.error = error ? message : '';
	}
}
