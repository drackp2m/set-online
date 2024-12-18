import {
	DBSchema,
	IDBPDatabase,
	IDBPTransaction,
	IndexKey,
	IndexNames,
	StoreKey,
	StoreNames,
	StoreValue,
	openDB,
} from 'idb';

import { MigrationHandler } from './migration-handler';

export class GenericRepository<T extends DBSchema> {
	private dbName = 'play_set_online';
	private dbPromise: Promise<IDBPDatabase<T>>;
	private currentTransaction: IDBPTransaction<T, StoreNames<T>[], 'readwrite' | 'readonly'> | null =
		null;
	protected migrationHandler = new MigrationHandler<T>();

	constructor() {
		this.dbPromise = openDB<T>(this.dbName, this.migrationHandler.getLatestVersion(), {
			upgrade: (db, oldVersion, newVersion, transaction) => {
				this.migrationHandler.applyMigrations(db, oldVersion, newVersion, transaction);
			},
		});
	}

	async beginTransaction(storeNames: StoreNames<T>[]): Promise<void> {
		const db = await this.dbPromise;
		this.currentTransaction = db.transaction(storeNames, 'readwrite');
	}

	async commitTransaction(): Promise<void> {
		if (this.currentTransaction) {
			await this.currentTransaction.done;
			this.currentTransaction = null;
		}
	}

	async set<K extends StoreNames<T>>(
		storeName: K,
		key: StoreKey<T, K>,
		value: StoreValue<T, K>,
	): Promise<StoreValue<T, K>> {
		return this.withTransaction([storeName], 'readwrite', async (tx) => {
			await tx.objectStore(storeName).put(value, key);

			return value;
		});
	}

	async get<K extends StoreNames<T>>(
		storeName: K,
		key: StoreKey<T, K>,
	): Promise<StoreValue<T, K> | undefined> {
		return this.withTransaction([storeName], 'readonly', async (tx) => {
			return tx.objectStore(storeName).get(key);
		});
	}

	async getByIndex<K extends StoreNames<T>>(
		storeName: K,
		indexName: IndexNames<T, K>,
		indexValue: IDBKeyRange | IndexKey<T, K, IndexNames<T, K>>,
	): Promise<StoreValue<T, K>[]> {
		return this.withTransaction([storeName], 'readonly', async (tx) => {
			return tx.objectStore(storeName).index(indexName).getAll(indexValue);
		});
	}

	async delete<K extends StoreNames<T>>(storeName: K, key: StoreValue<T, K>): Promise<void> {
		await this.withTransaction([storeName], 'readwrite', async (tx) => {
			await tx.objectStore(storeName).delete(key);
		});
	}

	async clear<K extends StoreNames<T>>(storeName: K): Promise<void> {
		await this.withTransaction([storeName], 'readwrite', async (tx) => {
			await tx.objectStore(storeName).clear();
		});
	}

	private async withTransaction<R, M extends 'readonly' | 'readwrite'>(
		storeNames: StoreNames<T>[],
		mode: M,
		operation: (tx: IDBPTransaction<T, StoreNames<T>[], M>) => Promise<R>,
	): Promise<R> {
		const tx = (this.currentTransaction ??
			(await this.dbPromise).transaction(storeNames, mode)) as IDBPTransaction<
			T,
			StoreNames<T>[],
			M
		>;

		const result = await operation(tx);
		if (!this.currentTransaction) {
			await tx.done;
		}

		return result;
	}
}
