import { Component, WritableSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

import { GetUsersGQL } from '../../graphql/apollo-operations';
import { ApiClient } from '../../shared/services/api-client.service';

@Component({
	templateUrl: './example.page.html',
	styleUrls: ['./example.page.scss'],
})
export default class ExamplePage {
	private readonly hello$ = this.apiClient.default.get('/hello');

	hello = toSignal<string, string>(this.hello$.pipe(map((data) => data.message)), {
		initialValue: 'An error ocurred',
	});

	users: WritableSignal<number | undefined> = signal(undefined);

	response!: string;
	error!: string;

	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	constructor(private readonly apiClient: ApiClient, private readonly getUsersGQL: GetUsersGQL) {}

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

	private show(message: string, error = false) {
		this.response = error ? '' : message;
		this.error = error ? message : '';
	}
}
