import { NgTemplateOutlet } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { CardColor, CardShading, CardShape } from '@playsetonline/api-definitions';
import {
	GetPingsGQL,
	GetPingsSubscription,
	GetUserInfoGQL,
} from '@playsetonline/apollo-definitions';

import { CardShapeComponent } from '../../component/card-shape/card-shape.component';
import { MediaDebugComponent } from '../../component/media-debug/media-debug.component';
import { ApiClient } from '../../service/api-client.service';
import { AuthStore } from '../../store/auth.store';
import { UserStore } from '../../store/user.store';

@Component({
	standalone: true,
	templateUrl: './main.layout.html',
	styleUrl: './main.layout.scss',
	imports: [
		RouterOutlet,
		RouterLink,
		RouterLinkActive,
		NgTemplateOutlet,
		MediaDebugComponent,
		CardShapeComponent,
	],
	providers: [GetPingsGQL, GetUserInfoGQL],
})
export default class MainLayout implements OnInit {
	private readonly apiClient = inject(ApiClient);
	private readonly router = inject(Router);
	private readonly authStore = inject(AuthStore);
	private readonly userStore = inject(UserStore);
	private readonly getPingsGQL = inject(GetPingsGQL);
	private readonly swUpdate = inject(SwUpdate);

	readonly user = this.userStore.data;
	readonly userError = this.userStore.error;
	readonly getPings = signal<GetPingsSubscription['getPings'] | undefined>(undefined);

	readonly shape = CardShape;
	readonly color = CardColor;
	readonly shading = CardShading;

	ngOnInit(): void {
		this.serviceWorkerCheckUpdates();

		this.getPingsGQL.subscribe().subscribe({
			next: (data) => {
				if (data.data) {
					this.getPings.set(data.data.getPings);
				}
			},
			error: (error: unknown) => {
				const typedError = error as HttpErrorResponse;

				console.error(typedError.message);
			},
		});
	}

	logout() {
		return () =>
			this.apiClient.auth.get('/logout').subscribe({
				next: () => {
					this.authStore.markTokensAs('invalid');
					this.userStore.reset();
					this.userStore.fetchData();

					this.router.navigate(['/login']);
				},
			});
	}

	private serviceWorkerCheckUpdates() {
		if (this.swUpdate.isEnabled) {
			this.swUpdate.versionUpdates.subscribe({
				next: (version) => {
					switch (version.type) {
						case 'VERSION_DETECTED':
							console.log('New version detected. Downloading...');
							break;
						case 'VERSION_READY':
							if (confirm('New version of the app is ready. Do you want to install it?')) {
								alert('Installing new version...');

								this.swUpdate.activateUpdate().then(() => {
									location.reload();
								});
							}
							break;
						case 'VERSION_INSTALLATION_FAILED':
							console.error('Failed to install new version.');
							break;
					}
				},
			});
		}
	}
}
