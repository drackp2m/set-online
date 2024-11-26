import { Injectable } from '@angular/core';
import { DBSchema } from 'idb';

import { GenericRepository } from '../../repository/generic-repository';

import { LocalStorageKey } from './definition/indexed-db-key.enum';

interface KeyValueStoreSchema extends DBSchema {
	key_value: {
		key: LocalStorageKey;
		value: unknown;
	};
}

@Injectable({
	providedIn: 'root',
})
export class IndexedDBService extends GenericRepository<KeyValueStoreSchema> {
	constructor() {
		super('play_set_online', 'key_value', 1, (db) => {
			if (!db.objectStoreNames.contains('key_value')) {
				db.createObjectStore('key_value');
			}
		});
	}
}
