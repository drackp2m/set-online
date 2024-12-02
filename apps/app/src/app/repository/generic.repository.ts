import { DBSchema, IDBPDatabase, IDBPTransaction, StoreNames, StoreValue, openDB } from 'idb';

export class GenericRepository<T extends DBSchema> {
	private dbName = 'play_set_online';
	private dbPromise: Promise<IDBPDatabase<T>>;
	private currentTransaction: IDBPTransaction<T, StoreNames<T>[], 'readwrite' | 'readonly'> | null =
		null;

	constructor(
		private dbVersion: number,
		private upgradeCallback: (
			db: IDBPDatabase<T>,
			oldVersion: number,
			newVersion: number | null,
			transaction: IDBPTransaction<T, StoreNames<T>[], 'versionchange'>,
		) => void,
	) {
		this.dbPromise = openDB<T>(this.dbName, this.dbVersion, {
			upgrade: this.upgradeCallback,
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
		key: StoreValue<T, K>['key'],
		value: StoreValue<T, K>['value'],
	): Promise<void> {
		await this.withTransaction([storeName], 'readwrite', async (tx) => {
			await tx.objectStore(storeName).put(value, key);
		});
	}

	async get<K extends StoreNames<T>>(
		storeName: K,
		key: StoreValue<T, K>['key'],
	): Promise<StoreValue<T, K>['value'] | undefined> {
		return this.withTransaction([storeName], 'readonly', async (tx) => {
			return tx.objectStore(storeName).get(key);
		});
	}

	async delete<K extends StoreNames<T>>(storeName: K, key: StoreValue<T, K>['key']): Promise<void> {
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
