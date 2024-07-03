import NodeCache from 'node-cache';

import { CacheNamespace } from '../definition/cache-namespace.enum';

import { SemaphoreManagerService } from './semaphore-manager.service';

export class NodeCacheService {
	private readonly nodeCache = new NodeCache({ stdTTL: this.stdTTL });
	private readonly semaphoreService = new SemaphoreManagerService().getInstance({
		name: CacheNamespace.ping,
	});

	constructor(private readonly stdTTL = 60) {}

	async set<T>(key: string, value: T, ttl?: number): Promise<boolean> {
		await this.semaphoreService.acquire();

		try {
			return this.nodeCache.set<T>(key, value, ttl ?? this.stdTTL);
		} finally {
			this.semaphoreService.release();
		}
	}

	async get<T>(key: string): Promise<T | undefined> {
		await this.semaphoreService.acquire();

		try {
			return this.nodeCache.get<T>(key);
		} finally {
			this.semaphoreService.release();
		}
	}

	async getAll<T>(): Promise<{ [key: string]: T }> {
		await this.semaphoreService.acquire();

		try {
			const allKeys = this.nodeCache.keys();

			return this.nodeCache.mget<T>(allKeys);
		} finally {
			this.semaphoreService.release();
		}
	}

	async getAllKeys(): Promise<string[]> {
		await this.semaphoreService.acquire();

		try {
			return this.nodeCache.keys();
		} finally {
			this.semaphoreService.release();
		}
	}

	async updateTtl(key: string, ttl: number): Promise<boolean> {
		await this.semaphoreService.acquire();

		try {
			return this.nodeCache.ttl(key, ttl);
		} finally {
			this.semaphoreService.release();
		}
	}
}
