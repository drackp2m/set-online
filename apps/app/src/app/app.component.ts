import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SendPingGQL } from '@playsetonline/apollo-definitions';

import { pingValue as pingValueConfig } from './app.config';
import { SplashScreenComponent } from './component/splash-screen/splash-screen.component';
import { GameOfflineStore } from './page/game/store/game-offline.store';
import { AppLoaderService } from './service/app-loader.service';
import { UserStore } from './store/user.store';

import { version } from '@package';

@Component({
	standalone: true,
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	imports: [RouterOutlet, SplashScreenComponent],
	providers: [SendPingGQL],
})
export class AppComponent {
	private readonly sendPing = inject(SendPingGQL);
	private readonly userStore = inject(UserStore);
	private readonly gameOfflineStore = inject(GameOfflineStore);
	private readonly appLoaderService = inject(AppLoaderService);

	readonly version = version;
	readonly loadFinish = this.appLoaderService.loadFinish;

	constructor() {
		this.userStore.fetchData();

		effect(() => {
			const pingValue = pingValueConfig();

			if (pingValue !== undefined) {
				this.sendPing.mutate({ input: { pingValue } }).subscribe();
			}
		});
	}
}
