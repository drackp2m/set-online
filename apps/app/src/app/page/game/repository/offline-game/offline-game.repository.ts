import { Injectable } from '@angular/core';

import { Card } from '../../../../definition/card.interface';
import { GenericRepository } from '../../../../repository/generic.repository';

import { OfflineGameSchema } from './definition/offline-game-schema.interface';
import { OfflineGameSet } from './definition/offline-game-set.interface';
import { OfflineGameStatus } from './definition/offline-game-status.enum';
import { OfflineGame } from './definition/offline-game.interface';

@Injectable({
	providedIn: 'root',
})
export class OfflineGameRepository extends GenericRepository<OfflineGameSchema> {
	async getInProgressGame(): Promise<[OfflineGame, OfflineGameSet[]] | undefined> {
		const offlineGame = await this.getByIndex(
			'offline_game',
			'status',
			OfflineGameStatus.IN_PROGRESS,
		);

		if (offlineGame[0] === undefined) {
			return undefined;
		}

		const offlineGameSets = await this.getByIndex(
			'offline_game_set',
			'game_uuid',
			offlineGame[0].uuid,
		);

		return [offlineGame[0], offlineGameSets];
	}

	async setNewGame(boardCards: Card[]): Promise<OfflineGame> {
		const uuid = crypto.randomUUID();
		const now = new Date();

		const game: OfflineGame = {
			uuid,
			board_cards: boardCards,
			status: OfflineGameStatus.IN_PROGRESS,
			cloud_backup: false,
			created_at: now,
			updated_at: now,
		};

		await this.set('offline_game', uuid, game);

		return game;
	}

	async setSelectedSet(
		gameUuid: string,
		setCards: Card[],
		isSet: boolean,
	): Promise<OfflineGameSet> {
		const uuid = crypto.randomUUID();
		const now = new Date();

		const gameSet: OfflineGameSet = {
			uuid: uuid,
			game_uuid: gameUuid,
			cards: setCards,
			valid: isSet,
			created_at: now,
		};

		await this.set('offline_game_set', crypto.randomUUID(), gameSet);

		return gameSet;
	}
}
