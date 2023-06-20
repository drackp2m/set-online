import { Message } from '@set-online/api-interfaces';

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

import { LoginGQL } from '../graphql/apollo-operations';

@Component({
	selector: 'set-online-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	hello$ = this.http.get<Message>('/api/hello').pipe(map((data) => data.message));

	token!: string;
	error!: string;

	form = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required]),
	});

	constructor(private readonly http: HttpClient, private readonly login: LoginGQL) {}

	onSubmit() {
		this.gqlLogin();
	}

	private gqlLogin(): void {
		if (!this.form.value.email || !this.form.value.password) return;

		this.login
			.fetch({ input: { username: this.form.value.email, password: this.form.value.password } })
			.subscribe({
				error: (error) => {
					this.error = error.message;
				},
				next: (data) => {
					this.token = data.data.login.message;
				},
			});
	}
}
