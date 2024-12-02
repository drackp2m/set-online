import { Injectable } from '@angular/core';

import { GenericRepository } from '../../../../repository/generic.repository';

import { OfflineGameSchema } from './definition/offline-game-schema.interface';

@Injectable({
	providedIn: 'root',
})
export class OfflineGameRepository extends GenericRepository<OfflineGameSchema> {
	constructor() {
		super('game', 1, (db) => {
			if (!db.objectStoreNames.contains('game')) {
				db.createObjectStore('game');
			}
		});
	}
}
