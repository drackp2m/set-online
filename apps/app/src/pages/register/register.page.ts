import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RegisterGQL } from '../../graphql/apollo-operations';

@Component({
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export default class RegisterPage {
	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	constructor(private readonly registerGql: RegisterGQL) {}

	onSubmit() {
		if (!this.form.value.username || !this.form.value.password) return;

		this.registerGql
			.mutate({
				input: { username: this.form.value.username, password: this.form.value.password },
			})
			.subscribe(({ data }) => console.log(data));
	}
}
