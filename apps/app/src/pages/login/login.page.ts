import { Component, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginGQL, UserEntity } from '../../graphql/apollo-operations';

@Component({
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export default class LoginPage {
	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	user: WritableSignal<UserEntity | null> = signal(null);
	error = signal('');

	constructor(private readonly loginGql: LoginGQL, private readonly router: Router) {}

	onSubmit() {
		if (!this.form.value.username || !this.form.value.password) return;

		this.loginGql
			.fetch({
				input: { username: this.form.value.username, password: this.form.value.password },
			})
			.subscribe((result) => {
				if (result.data) {
					this.router.navigate(['/home']);
				} else if (result.errors) {
					this.error.set(result.errors?.[0].message);
				}
			});
	}
}
