import { Injectable } from '@angular/core';

import { GenericRepository } from '../../../../repository/generic.repository';

import { OfflineGameSchema } from './definition/offline-game-schema.interface';

@Injectable({
	providedIn: 'root',
})
export class OfflineGameRepository extends GenericRepository<OfflineGameSchema> {
	constructor() {
		super(1, (db, oldVersion) => {
			if (oldVersion < 1) {
				db.createObjectStore('offline_game');
			}
		});
	}
}
