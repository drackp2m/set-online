import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select } from '@ngneat/elf';
import { filter, take } from 'rxjs';

import { GetUsersGQL } from '../../graphql/apollo-operations';
import { ApiClient } from '../../shared/services/api-client.service';
import { CurrentUserStore } from '../../stores/current-user.store';

@Component({
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export default class LoginPage implements OnInit {
	form = new FormGroup({
		username: new FormControl<string>('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	usernames: WritableSignal<string[] | undefined> = signal(undefined);

	error = signal(undefined);

	constructor(
		private readonly apiClient: ApiClient,
		private readonly router: Router,
		private readonly currentUserStore: CurrentUserStore,
		private readonly getUsersGQL: GetUsersGQL,
	) {}

	ngOnInit(): void {
		this.getUsersGQL.fetch().subscribe({
			next: (data) => {
				this.usernames.set(data.data.getUsers.map((user) => user.username));
			},
		});
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
					this.currentUserStore.fetchData();

					this.currentUserStore.state$
						.pipe(
							select((state) => state.loading),
							filter((loading) => !loading),
							take(1),
						)
						.subscribe({
							next: () => {
								this.router.navigate(['/home']);
							},
						});
				},
				error: ({ error }) => {
					this.error.set(error.message);
				},
			});
	}
}
