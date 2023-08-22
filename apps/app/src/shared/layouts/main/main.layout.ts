import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

import { CurrentUserStore } from '../../../stores/current-user.store';
import { MediaDebugComponent } from '../../components/media-debug/media-debug.component';
import { ApiClient } from '../../services/api-client.service';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrls: ['./main.layout.scss'],
	imports: [RouterOutlet, RouterModule, NgTemplateOutlet, MediaDebugComponent, NgIf],
})
export default class MainLayout {
	user = toSignal(this.currentUserStore.state$.pipe(map((state) => state.data)));

	constructor(
		private readonly apiClient: ApiClient,
		private readonly router: Router,
		private readonly currentUserStore: CurrentUserStore,
	) {
		this.currentUserStore.fetchData();
	}

	logout() {
		return () =>
			this.apiClient.auth.get('/logout').subscribe({
				next: () => {
					this.router.navigate(['/login']);
				},
			});
	}
}
