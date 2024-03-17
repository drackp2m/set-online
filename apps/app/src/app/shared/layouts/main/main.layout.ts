import { AsyncPipe, JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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
	imports: [
		RouterModule,
		NgTemplateOutlet,
		MediaDebugComponent,
		NgIf,
		JsonPipe,
		HttpClientModule,
		AsyncPipe,
	],
	providers: [CurrentUserStore, GetUserInfoGQL, Apollo, ApiClient, HttpLink],
})
export default class MainLayout {
	private readonly apiClient = inject(ApiClient);
	private readonly router = inject(Router);
	private readonly currentUserStore = inject(CurrentUserStore);

	user = toSignal(this.currentUserStore.state$.pipe(select((state) => state.data)));
	userError = toSignal(this.currentUserStore.state$.pipe(select((state) => state.error)));

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
