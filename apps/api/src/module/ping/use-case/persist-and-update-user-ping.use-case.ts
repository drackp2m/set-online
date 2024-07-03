import { Injectable } from '@nestjs/common';

import { CacheNamespace } from '../../../shared/definition/cache-namespace.enum';
import { CacheManagerService } from '../../../shared/service/cache-manager.service';
import { GenerateNowDateUseCase } from '../../../shared/use-case/generate-now-date.use-case';
import { CachedPing } from '../definition/cached-ping.interface';
import { UserPingValue } from '../definition/user-ping-value.interface';

import { GetPingFromValuesUseCase } from './get-ping-from-values.use-case';

@Injectable()
export class PersistAndUpdateUserPingUseCase {
	private readonly cacheService = this.cacheManagerService.getInstance({
		name: CacheNamespace.ping,
		ttl: 20,
	});

	constructor(
		private readonly cacheManagerService: CacheManagerService,
		private readonly generateNowDateUseCase: GenerateNowDateUseCase,
		private readonly getPingFromValuesUseCase: GetPingFromValuesUseCase,
	) {}

	async execute(userUuid: string, value: number): Promise<CachedPing | undefined> {
		const storedValues = await this.getStoredValues(userUuid);

		const storedValuesWithNewValue = this.addCurrentPingToStoredValues(
			storedValues?.values ?? [],
			value,
		);

		const valuesToPersist = await this.getPingFromValuesUseCase.execute(storedValuesWithNewValue);

		const savedCachedPing = await this.cacheService.set(userUuid, valuesToPersist);

		return savedCachedPing ? valuesToPersist : undefined;
	}

	private getStoredValues(userId: string): Promise<CachedPing | undefined> {
		return this.cacheService.get<CachedPing>(userId);
	}

	private addCurrentPingToStoredValues(
		storedValues: UserPingValue[],
		value: number,
	): UserPingValue[] {
		const now = this.generateNowDateUseCase.execute();
		const currentPing = { timestamp: now.getTime(), value };
		const valuesToPersist = storedValues.slice(0, 2);
		valuesToPersist.unshift(currentPing);

		return valuesToPersist;
	}
}
