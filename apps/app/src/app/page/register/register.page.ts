import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { GetUserInfoGQL, User } from '@playsetonline/apollo-definitions';

import { ApiClient } from '../../service/api-client.service';
import { AuthStore } from '../../store/auth.store';
import { UserStore } from '../../store/user.store';

@Component({
	standalone: true,
	templateUrl: './register.page.html',
	imports: [ReactiveFormsModule, JsonPipe],
	providers: [ApiClient, HttpClient, GetUserInfoGQL],
})
export class RegisterPage {
	private readonly apiClient = inject(ApiClient);
	private readonly userStore = inject(UserStore);
	private readonly authStore = inject(AuthStore);

	form = new FormGroup({
		username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
		password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
	});

	loading = signal(false);
	user: WritableSignal<User | null> = signal(null);
	error = signal(undefined);

	onSubmit() {
		const controls = this.form.controls;

		if (!controls.username.value || !controls.password.value) {
			return;
		}

		this.loading.set(true);

		const username = controls.username.value;
		const password = controls.password.value;

		this.apiClient.auth.post('/register', { username, password }).subscribe({
			next: (data) => {
				this.user.set(data);

				this.login(username, password);
			},
			error: ({ error }) => {
				this.loading.set(false);
				this.error.set(error.message);
			},
		});
	}

	private login(username: string, password: string): void {
		this.apiClient.auth.post('/login', { username, password }).subscribe({
			next: () => {
				this.loading.set(false);
				this.authStore.markTokensAs('valid');
				this.userStore.fetchData();
			},
			error: ({ error }) => {
				this.error.set(error.message);
			},
		});
	}
}
