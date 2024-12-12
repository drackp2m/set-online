import { Injectable, computed, inject, signal } from '@angular/core';

import { GameOfflineStore } from '../page/game/store/game-offline.store';
import { MigrationHandler } from '../repository/migration-handler';
import { UserStore } from '../store/user.store';

@Injectable({
	providedIn: 'root',
})
export class AppLoaderService {
	private readonly userStore = inject(UserStore);
	private readonly gameOfflineStore = inject(GameOfflineStore);
	private readonly migrationHandler = inject(MigrationHandler);

	private stopCheck = false;

	readonly loadFinish = computed(() => {
		return this.checkLoadFinish();
	});

	readonly removeDeprecatedDatabase = signal<boolean>(false);

	constructor() {
		this.migrationHandler.removeDeprecatedDatabase().then(() => {
			this.removeDeprecatedDatabase.set(true);
		});
	}

	private checkLoadFinish(): boolean {
		const loadFinish =
			this.stopCheck ||
			(this.userLoaded() && this.isGameLoaded() && this.isRemoveDatabaseFinish());

		if (loadFinish) {
			this.stopCheck = true;
		}

		return loadFinish;
	}

	private userLoaded(): boolean {
		const isUserLoading = this.userStore.isLoading();

		return isUserLoading === false;
	}

	private isGameLoaded(): boolean {
		const gameLoading = this.gameOfflineStore.isLoading();

		return gameLoading === false;
	}

	private isRemoveDatabaseFinish(): boolean {
		const removeDeprecatedDatabase = this.removeDeprecatedDatabase();

		return removeDeprecatedDatabase === true;
	}
}
