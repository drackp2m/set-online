import { JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterModule } from '@angular/router';
import { select } from '@ngneat/elf';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

import { GetUserInfoGQL } from '../../../graphql/apollo-operations';
import { CurrentUserStore } from '../../../stores/current-user.store';
import { MediaDebugComponent } from '../../components/media-debug/media-debug.component';
import { ApiClient } from '../../services/api-client.service';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrl: './main.layout.scss',
	imports: [RouterModule, NgTemplateOutlet, MediaDebugComponent, NgIf, JsonPipe, HttpClientModule],
	providers: [CurrentUserStore, GetUserInfoGQL, Apollo, ApiClient, HttpLink],
})
export default class MainLayout {
	user = toSignal(this.currentUserStore.state$.pipe(select((state) => state.data)));
	userError = toSignal(this.currentUserStore.state$.pipe(select((state) => state.error)));

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
					this.currentUserStore.reset();

					this.router.navigate(['/login']);
				},
			});
	}
}
