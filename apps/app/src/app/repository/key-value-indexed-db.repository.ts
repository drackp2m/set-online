import { Injectable } from '@angular/core';
import { DBSchema, deleteDB } from 'idb';

import { LocalStorageKey } from './definition/indexed-db-key.enum';
import { GenericRepository } from './generic.repository';

interface KeyValueStoreSchema extends DBSchema {
	key_value: {
		key: LocalStorageKey;
		value: unknown;
	};
}

@Injectable({
	providedIn: 'root',
})
export class KeyValueIndexedDBRepository extends GenericRepository<KeyValueStoreSchema> {
	private readonly deprecatedDatabaseNames = ['PlaySetOnline'];

	constructor() {
		super('play_set_online', 'key_value', 1, (db, oldVersion) => {
			if (oldVersion < 1) {
				db.createObjectStore('key_value');
			}
		});
	}

	async removeDeprecatedDatabase(): Promise<void> {
		const promises: Promise<void>[] = [];

		if ('databases' in indexedDB) {
			const databases = await indexedDB.databases();
			databases.forEach((database): Promise<void> | void => {
				console.log(database.name);
				if (database.name && this.deprecatedDatabaseNames.includes(database.name)) {
					const deletePromise = deleteDB(database.name, {
						blocked() {
							console.warn(`Unable to delete DataBase ${database.name}, because it is blocked`);
						},
					});

					promises.push(deletePromise);
				}
			});
		}

		await Promise.all(promises);
	}
}
