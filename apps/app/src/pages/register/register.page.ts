import { HttpClient } from '@angular/common/http';
import { Component, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserEntity } from '../../graphql/apollo-operations';

@Component({
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export default class RegisterPage {
	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	user: WritableSignal<UserEntity | null> = signal(null);
	error = signal('');

	constructor(private readonly httpClient: HttpClient) {}

	onSubmit() {
		if (!this.form.valid) return;

		this.httpClient.post<UserEntity>('/api/register', this.form.value).subscribe({
			next: (data) => {
				this.user.set(data);
			},
			error: (error) => {
				this.error.set(error.statusText);
			},
		});
	}
}
