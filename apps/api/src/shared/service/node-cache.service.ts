import { Injectable } from '@nestjs/common';
import * as NodeCache from 'node-cache';

@Injectable()
export class NodeCacheService {
	private readonly DEFAULT_TTL = 60;

	private readonly nodeCache = new NodeCache.default({ stdTTL: this.DEFAULT_TTL });

	get(key: string): unknown {
		return this.nodeCache.get(key);
	}

	set(key: string, value: unknown, ttl?: number): boolean {
		return this.nodeCache.set(key, value, ttl ?? this.DEFAULT_TTL);
	}
}
