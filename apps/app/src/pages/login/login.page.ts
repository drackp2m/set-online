import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export default class LoginPage {
	form = new FormGroup({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required]),
	});

	error = signal('');

	constructor(private readonly httpClient: HttpClient, private readonly router: Router) {}

	onSubmit() {
		if (!this.form.valid) return;

		this.httpClient.post('/api/login', this.form.value).subscribe({
			next: () => {
				this.router.navigate(['/home']);
			},
			error: (error) => {
				this.error.set(error.statusText);
			},
		});
	}
}
