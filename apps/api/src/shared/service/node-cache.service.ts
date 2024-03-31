import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';

@Injectable()
export class NodeCacheService {
	private readonly nodeCache = new NodeCache.default({ stdTTL: 60 });

	get(key: string): unknown {
		return this.nodeCache.get(key);
	}

	set(key: string, value: unknown, ttl?: number): boolean {
		return this.nodeCache.set(key, value, ttl);
	}
}
