import { Message } from '@set-online/api-interfaces';

import { HttpClient } from '@angular/common/http';
import { Component, WritableSignal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

import { GetUsersGQL, LoginGQL } from '../../graphql/apollo-operations';

@Component({
	templateUrl: './example.page.html',
	styleUrls: ['./example.page.scss'],
})
export default class ExamplePage {
	hello = toSignal<string, string>(
		this.http.get<Message>('/api/hello').pipe(map((data) => data.message)),
		{ initialValue: 'An error ocurred' },
	);

	users: WritableSignal<number | undefined> = signal(undefined);

	response!: string;
	error!: string;

	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	constructor(
		private readonly http: HttpClient,
		private readonly loginGQL: LoginGQL,
		private readonly getUsersGQL: GetUsersGQL,
	) {}

	onSubmit() {
		this.gqlLogin();
	}

	checkUsers(): void {
		this.getUsersGQL.fetch().subscribe({
			error: (error) => {
				this.error = error.message;
			},
			next: (data) => {
				console.log(data);
				this.users.set(data.data.getUsers.length);
			},
		});
	}

	refreshSession(): void {
		this.http.get('/api/refresh-session').subscribe({
			error: (error) => {
				this.error = error.error.refreshToken;
			},
		});
	}

	private gqlLogin(): void {
		if (!this.form.value.username || !this.form.value.password) return;

		this.loginGQL
			.fetch({ input: { username: this.form.value.username, password: this.form.value.password } })
			.subscribe({
				error: (error) => {
					this.error = error.message;
				},
				next: (data) => {
					this.response = data.data.login ? 'Login successful' : 'Login failed';
				},
			});
	}
}
