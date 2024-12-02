import {
	DBSchema,
	IDBPDatabase,
	IDBPTransaction,
	StoreKey,
	StoreNames,
	StoreValue,
	openDB,
} from 'idb';

export class GenericRepository<T extends DBSchema> {
	private dbName = 'play_set_online';
	private dbPromise: Promise<IDBPDatabase<T>>;

	constructor(
		private storeName: StoreNames<T>,
		private dbVersion: number,
		private upgradeCallback: (
			db: IDBPDatabase<T>,
			oldVersion: number,
			newVersion: number | null,
			transaction: IDBPTransaction<T, StoreNames<T>[], 'versionchange'>,
		) => void,
	) {
		this.dbPromise = this.initDB();
	}

	async set(key: StoreKey<T, StoreNames<T>>, value: StoreValue<T, StoreNames<T>>): Promise<void> {
		await (await this.dbPromise).put(this.storeName, value, key);
	}

	async get(key: StoreKey<T, StoreNames<T>>): Promise<StoreValue<T, StoreNames<T>> | undefined> {
		return (await this.dbPromise).get(this.storeName, key);
	}

	async delete(key: StoreKey<T, StoreNames<T>>): Promise<void> {
		await (await this.dbPromise).delete(this.storeName, key);
	}

	async clear(): Promise<void> {
		await (await this.dbPromise).clear(this.storeName);
	}

	private initDB(): Promise<IDBPDatabase<T>> {
		return openDB<T>(this.dbName, this.dbVersion, {
			upgrade: (db, oldVersion, newVersion, transaction) => {
				this.upgradeCallback(db, oldVersion, newVersion, transaction);
				if (!db.objectStoreNames.contains(this.storeName)) {
					db.createObjectStore(this.storeName);
				}
			},
			blocked() {
				console.warn('Database upgrade blocked');
			},
			blocking() {
				console.warn('Database blocking');
			},
			terminated() {
				console.warn('Database connection terminated');
			},
		});
	}
}
