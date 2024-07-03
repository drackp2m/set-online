import { Injectable } from '@nestjs/common';

import { CacheNamespace } from '../../../shared/definition/cache-namespace.enum';
import { CacheManagerService } from '../../../shared/service/cache-manager.service';
import { CachedPing } from '../definition/cached-ping.interface';

@Injectable()
export class GetPingsFromCacheUseCase {
	private readonly cacheService = this.cacheManagerService.getInstance({
		name: CacheNamespace.ping,
		ttl: 20,
	});

	constructor(private readonly cacheManagerService: CacheManagerService) {}

	async execute() {
		return this.cacheService.getAll<CachedPing>();
	}
}
