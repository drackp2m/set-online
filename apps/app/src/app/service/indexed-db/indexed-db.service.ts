import { Injectable } from '@angular/core';

import { LocalStorageKey } from './definition/indexed-db-key.enum';

@Injectable({
	providedIn: 'root',
})
export class IndexedDBService {
	private dbName = 'PlaySetOnline';
	private storeName = 'KeyValueStore';
	private dbVersion = 1;
	private dbPromise: Promise<IDBDatabase>;

	constructor() {
		this.dbPromise = this.initDB();
	}

	async setItem<T>(key: LocalStorageKey, data: T): Promise<void> {
		const db = await this.dbPromise;

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([this.storeName], 'readwrite');
			const store = transaction.objectStore(this.storeName);
			const request = store.put({ key, value: data });

			request.onsuccess = () => {
				resolve();
			};

			request.onerror = (event) => {
				reject((event.target as IDBRequest).error);
			};
		});
	}

	async getItem<T>(key: LocalStorageKey): Promise<T | undefined> {
		const db = await this.dbPromise;

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([this.storeName], 'readonly');
			const store = transaction.objectStore(this.storeName);
			const request = store.get(key);

			request.onsuccess = (event) => {
				const result = (event.target as IDBRequest).result;
				resolve(result ? (result.value as T) : undefined);
			};

			request.onerror = (event) => {
				reject((event.target as IDBRequest).error);
			};
		});
	}

	async deleteItem(key: LocalStorageKey): Promise<void> {
		const db = await this.dbPromise;

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([this.storeName], 'readwrite');
			const store = transaction.objectStore(this.storeName);
			const request = store.delete(key);

			request.onsuccess = () => {
				resolve();
			};

			request.onerror = (event) => {
				reject((event.target as IDBRequest).error);
			};
		});
	}

	async clearStore(): Promise<void> {
		const db = await this.dbPromise;

		return new Promise((resolve, reject) => {
			const transaction = db.transaction([this.storeName], 'readwrite');
			const store = transaction.objectStore(this.storeName);
			const request = store.clear();

			request.onsuccess = () => {
				resolve();
			};

			request.onerror = (event) => {
				reject((event.target as IDBRequest).error);
			};
		});
	}

	private initDB(): Promise<IDBDatabase> {
		return new Promise((resolve, reject) => {
			const request = indexedDB.open(this.dbName, this.dbVersion);

			request.onupgradeneeded = (event) => {
				const db = (event.target as IDBOpenDBRequest).result;
				if (!db.objectStoreNames.contains(this.storeName)) {
					db.createObjectStore(this.storeName, { keyPath: 'key' });
				}
			};

			request.onsuccess = (event) => {
				const db = (event.target as IDBOpenDBRequest).result;
				resolve(db);
			};

			request.onerror = (event) => {
				reject((event.target as IDBOpenDBRequest).error);
			};
		});
	}
}
