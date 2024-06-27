import { AsyncPipe, JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AuthStore } from '../../../stores/auth.store';
import { CurrentUserStore } from '../../../stores/current-user.store';
import { MediaDebugComponent } from '../../components/media-debug/media-debug.component';
import { ApiClient } from '../../services/api-client.service';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrl: './main.layout.scss',
	imports: [RouterModule, NgTemplateOutlet, MediaDebugComponent, NgIf, JsonPipe, AsyncPipe],
})
export default class MainLayout {
	private readonly apiClient = inject(ApiClient);
	private readonly router = inject(Router);
	private readonly authStore = inject(AuthStore);
	private readonly currentUserStore = inject(CurrentUserStore);

	user = this.currentUserStore.data;
	userError = this.currentUserStore.error;

	logout() {
		return () =>
			this.apiClient.auth.get('/logout').subscribe({
				next: () => {
					this.authStore.markTokensAsInvalid();
					this.currentUserStore.reset();
					this.currentUserStore.fetchData();

					this.router.navigate(['/login']);
				},
			});
	}
}
