import { Injectable } from '@nestjs/common';

import { CacheNamespace } from '../definition/cache-namespace.enum';

import { NodeCacheService } from './node-cache.service';

@Injectable()
export class CacheManagerService {
	private readonly defaultInstance = new NodeCacheService();
	private readonly instances: Map<string, NodeCacheService> = new Map();

	getInstance(config?: { name: CacheNamespace; ttl: number }): NodeCacheService {
		if (config?.name === undefined) {
			return this.defaultInstance;
		}

		const existingInstance = this.instances.get(config.name);

		if (existingInstance === undefined) {
			const newInstance = new NodeCacheService(config.ttl);
			this.instances.set(config.name, newInstance);

			return newInstance;
		}

		return existingInstance;
	}
}
