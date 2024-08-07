import { JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Apollo, ApolloModule } from 'apollo-angular';

import { GetUserInfoGQL, User } from '@set-online/apollo-definitions';

import { ApiClient } from '../../shared/services/api-client.service';
import { CurrentUserStore } from '../../stores/current-user.store';

@Component({
	standalone: true,
	templateUrl: './register.page.html',
	styleUrl: './register.page.scss',
	imports: [NgIf, ReactiveFormsModule, ApolloModule, JsonPipe],
	providers: [ApiClient, CurrentUserStore, HttpClient, GetUserInfoGQL, Apollo],
})
export class RegisterPage {
	private readonly apiClient = inject(ApiClient);
	private readonly currentUserStore = inject(CurrentUserStore);

	form = new FormGroup({
		username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
		password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
	});

	user: WritableSignal<User | null> = signal(null);
	error = signal(undefined);

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
