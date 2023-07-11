import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiClient } from '../../shared/services/api-client.service';

@Component({
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export default class LoginPage {
	form = new FormGroup({
		username: new FormControl<string>('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	error = signal('');

	constructor(private readonly apiClient: ApiClient, private readonly router: Router) {}

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
					this.router.navigate(['/home']);
				},
				error: (error) => {
					this.error.set(error.statusText);
				},
			});
	}
}
