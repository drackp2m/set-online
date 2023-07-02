import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrls: ['./main.layout.scss'],
	imports: [RouterOutlet, RouterModule],
})
export default class MainLayout {
	constructor(private readonly httpClient: HttpClient, private readonly router: Router) {}

	logout() {
		this.httpClient.get('/api/logout').subscribe({
			next: () => {
				this.router.navigate(['/login']);
			},
		});
	}
}
