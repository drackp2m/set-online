import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

import { ApiClient } from '../../services/api-client.service';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrls: ['./main.layout.scss'],
	imports: [RouterOutlet, RouterModule],
})
export default class MainLayout {
	constructor(private readonly apiClient: ApiClient, private readonly router: Router) {}

	logout() {
		this.apiClient.auth.get('/logout').subscribe({
			next: () => {
				this.router.navigate(['/login']);
			},
		});
	}
}
