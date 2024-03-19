import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, WritableSignal, effect, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GetUsersGQL } from '../../graphql/apollo-operations';
import { ApiClient } from '../../shared/services/api-client.service';
import { CurrentUserStore } from '../../stores/current-user.store';

@Component({
	standalone: true,
	templateUrl: './login.page.html',
	styleUrl: './login.page.scss',
	imports: [NgIf, NgFor, ReactiveFormsModule, JsonPipe],
	providers: [GetUsersGQL],
})
export default class LoginPage implements OnInit {
	private readonly apiClient = inject(ApiClient);
	private readonly router = inject(Router);
	private readonly currentUserStore = inject(CurrentUserStore);
	private readonly getUsersGQL = inject(GetUsersGQL);

	loginFinished = signal(false);

	form = new FormGroup({
		username: new FormControl<string>('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	usernames: WritableSignal<string[] | undefined> = signal(undefined);

	error = signal(undefined);

	constructor() {
		effect(
			() => {
				if (this.loginFinished()) {
					this.currentUserStore.fetchData();
					this.router.navigate(['/home']);
				}
			},
			{ allowSignalWrites: true },
		);
	}

	ngOnInit(): void {
		console.log('login init');
		// this.getUsersGQL.fetch().subscribe({
		// 	next: (data) => {
		// 		this.usernames.set(data.data.getUsers.map((user) => user.username));
		// 	},
		// });
	}

	onSubmit() {
		const controls = this.form.controls;

		if (!controls.username.value || !controls.password.value) return;

		this.apiClient.auth
			.post('/login', {
				username: controls.username.value,
				password: controls.password.value,
			})
			.subscribe({
				next: () => {
					this.loginFinished.set(true);
				},
				error: ({ error }) => {
					this.error.set(error.message);
				},
			});
	}
}
