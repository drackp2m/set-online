import { Injectable } from '@angular/core';
import { deleteDB } from 'idb';

import { GenericRepository } from '../generic.repository';

import { KeyValueSchema } from './definition/key-value-schema.interface';

@Injectable({
	providedIn: 'root',
})
export class KeyValueRepository extends GenericRepository<KeyValueSchema> {
	private readonly deprecatedDatabaseNames = ['PlaySetOnline'];

	constructor() {
		super('key_value', 1, (db, oldVersion) => {
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
