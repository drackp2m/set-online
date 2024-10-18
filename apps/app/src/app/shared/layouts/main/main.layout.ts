import { AsyncPipe, JsonPipe, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { GetPingsGQL, GetPingsSubscription, GetUserInfoGQL } from '@set-online/apollo-definitions';

import { AuthStore } from '../../../stores/auth.store';
import { CurrentUserStore } from '../../../stores/current-user.store';
import { MediaDebugComponent } from '../../components/media-debug/media-debug.component';
import { ApiClient } from '../../services/api-client.service';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrl: './main.layout.scss',
	imports: [RouterModule, NgTemplateOutlet, MediaDebugComponent, NgIf, JsonPipe, AsyncPipe],
	providers: [GetPingsGQL, GetUserInfoGQL],
})
export default class MainLayout implements OnInit {
	private readonly apiClient = inject(ApiClient);
	private readonly router = inject(Router);
	private readonly authStore = inject(AuthStore);
	private readonly currentUserStore = inject(CurrentUserStore);
	private readonly getPingsGQL = inject(GetPingsGQL);

	user = this.currentUserStore.data;
	userError = this.currentUserStore.error;
	getPings = signal<GetPingsSubscription['getPings'] | undefined>(undefined);

	ngOnInit(): void {
		this.getPingsGQL.subscribe().subscribe({
			next: (data) => {
				if (data.data) {
					this.getPings.set(data.data.getPings);
				}
			},
			error: (error) => {
				console.log({ xxx: error });

				this.getPings.set(error.message);
			},
		});
	}

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
