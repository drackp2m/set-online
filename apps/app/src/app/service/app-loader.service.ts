import { Injectable, computed, inject } from '@angular/core';

import { GameOfflineStore } from '../page/game/store/game-offline.store';
import { UserStore } from '../store/user.store';

@Injectable({
	providedIn: 'root',
})
export class AppLoaderService {
	private readonly userStore = inject(UserStore);
	private readonly gameOfflineStore = inject(GameOfflineStore);

	private stopCheck = false;

	readonly loadFinish = computed(() => {
		return this.checkLoadFinish();
	});

	private checkLoadFinish(): boolean {
		const loadFinish = this.stopCheck || (this.userLoaded() && this.isGameLoaded());

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
		const gameBoardCards = this.gameOfflineStore.boardCards();
		const gameSetCards = this.gameOfflineStore.setCards();

		return gameBoardCards.length !== 0 || gameSetCards.length !== 0;
	}
}
