import { AsyncPipe, JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, effect, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { CurrentUserStore } from '../../../stores/current-user.store';
import { MediaDebugComponent } from '../../components/media-debug/media-debug.component';
import { ApiClient } from '../../services/api-client.service';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrl: './main.layout.scss',
	imports: [
		RouterModule,
		NgTemplateOutlet,
		MediaDebugComponent,
		NgIf,
		JsonPipe,
		HttpClientModule,
		AsyncPipe,
	],
})
export default class MainLayout {
	private readonly apiClient = inject(ApiClient);
	private readonly router = inject(Router);
	private readonly currentUserStore = inject(CurrentUserStore);

	user = this.currentUserStore.data;
	// userError = toSignal(this.currentUserStore.state$.pipe(select((state) => state.error)));

	constructor() {
		effect(() => {
			const user = this.currentUserStore.data();
			console.log(user);
		});
	}

	logout() {
		return () =>
			this.apiClient.auth.get('/logout').subscribe({
				next: () => {
					this.currentUserStore.reset();

					this.router.navigate(['/login']);
				},
			});
	}
}
