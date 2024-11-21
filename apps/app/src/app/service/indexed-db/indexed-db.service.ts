import { Injectable } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

import { LocalStorageKey } from './definition/indexed-db-key.enum';

interface KeyValueStoreSchema extends DBSchema {
	KeyValueStore: {
		key: LocalStorageKey;
		value: unknown;
	};
}

@Injectable({
	providedIn: 'root',
})
export class IndexedDBService {
	private readonly dbName = 'PlaySetOnline';
	private readonly storeName = 'KeyValueStore';
	private readonly dbVersion = 1;
	private readonly dbPromise: Promise<IDBPDatabase<KeyValueStoreSchema>>;

	constructor() {
		this.dbPromise = this.initDB();
	}

	async setItem<T>(key: LocalStorageKey, value: T): Promise<void> {
		const db = await this.dbPromise;

		await db.put(this.storeName, { key, value });
	}

	async getItem<T>(key: LocalStorageKey): Promise<T | undefined> {
		const db = await this.dbPromise;

		const item = await db.get(this.storeName, key);

		const typedItem = item as { value: T } | undefined;

		return typedItem?.value;
	}

	async deleteItem(key: LocalStorageKey): Promise<void> {
		const db = await this.dbPromise;

		await db.delete(this.storeName, key);
	}

	async clearStore(): Promise<void> {
		const db = await this.dbPromise;

		await db.clear(this.storeName);
	}

	private initDB(): Promise<IDBPDatabase<KeyValueStoreSchema>> {
		const storeName = this.storeName;

		return openDB<KeyValueStoreSchema>(this.dbName, this.dbVersion, {
			upgrade(db) {
				if (!db.objectStoreNames.contains(storeName)) {
					db.createObjectStore(storeName, { keyPath: 'key' });
				}
			},
		});
	}
}
