import { Injectable } from '@angular/core';
import { DBSchema } from 'idb';

import { CardInterface } from '../../../definition/card.interface';
import { GenericRepository } from '../../../repository/generic-repository';

interface Game {
	uuid: string;
	status: 'active' | 'inactive' | 'cancelled';
	board_cards: CardInterface[];
	cloud_backup: boolean;
	created_at: Date;
	updated_at: Date;
}

interface OfflineGameSchema extends DBSchema {
	game: {
		key: string;
		value: Game;
	};
}

@Injectable({
	providedIn: 'root',
})
export class IndexedDBService extends GenericRepository<OfflineGameSchema> {
	constructor() {
		super('play_set_online', 'game', 1, (db) => {
			if (!db.objectStoreNames.contains('game')) {
				db.createObjectStore('game');
			}
		});
	}
}
