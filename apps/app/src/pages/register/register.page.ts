import { Component, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserEntity } from '../../graphql/apollo-operations';
import { ApiClient } from '../../shared/services/api-client.service';
import { CurrentUserStore } from '../../stores/current-user.store';

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
	error = signal(undefined);

	constructor(
		private readonly apiClient: ApiClient,
		private readonly currentUserStore: CurrentUserStore,
	) {}

	onSubmit() {
		const controls = this.form.controls;

		if (!controls.username.value || !controls.password.value) return;

		this.apiClient.auth
			.post('/register', {
				username: controls.username.value,
				password: controls.password.value,
			})
			.subscribe({
				next: (data) => {
					this.currentUserStore.fetchData();

					this.user.set(data);
				},
				error: ({ error }) => {
					this.error.set(error.message);
				},
			});
	}
}
