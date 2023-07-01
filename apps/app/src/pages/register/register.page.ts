import { Component, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegisterGQL, UserEntity } from '../../graphql/apollo-operations';

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

	constructor(private readonly registerGql: RegisterGQL) {}

	onSubmit() {
		if (!this.form.value.username || !this.form.value.password) return;

		this.registerGql
			.mutate({
				input: { username: this.form.value.username, password: this.form.value.password },
			})
			.subscribe((result) => {
				if (result.data) {
					this.user.set(result.data.register);
				} else if (result.errors) {
					this.error.set(result.errors?.[0].message);
				}
			});
	}
}