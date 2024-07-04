import { Injectable } from '@nestjs/common';

import { CacheNamespace } from '../../../shared/definition/cache-namespace.enum';
import { CacheManagerService } from '../../../shared/service/cache-manager.service';
import { CachedPing } from '../definition/cached-ping.interface';
import { GetPingsOutput } from '../dto/output/get-pings.output';

@Injectable()
export class GetPingsFromCacheUseCase {
	private readonly cacheService = this.cacheManagerService.getInstance({
		name: CacheNamespace.ping,
		ttl: 20,
	});

	constructor(private readonly cacheManagerService: CacheManagerService) {}

	async execute(): Promise<GetPingsOutput[]> {
		const allPings = await this.cacheService.getAll<CachedPing>();

		const pingsAsOutput = Object.keys(allPings).map((userUuid) => {
			const ping = allPings[userUuid];

			return ping !== undefined ? new GetPingsOutput({ userUuid: userUuid, ping }) : undefined;
		});

		return pingsAsOutput.filter((value) => value !== undefined) as GetPingsOutput[];
	}
}
