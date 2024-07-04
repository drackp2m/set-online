import { Module } from '@nestjs/common';

import { ConfigurationService } from '../../shared/module/config/configuration.service';
import { CacheManagerService } from '../../shared/service/cache-manager.service';
import { GenerateNowDateUseCase } from '../../shared/use-case/generate-now-date.use-case';
import { IntervalUseCase } from '../../shared/use-case/interval.use-case';

import { PingResolver } from './ping.resolver';
import { GetPingsFromCacheUseCase } from './use-case/get-ping-from-cache.use-case';
import { GetPingFromValuesUseCase } from './use-case/get-ping-from-values.use-case';
import { PersistAndUpdateUserPingUseCase } from './use-case/persist-and-update-user-ping.use-case';

@Module({
	providers: [
		ConfigurationService,
		CacheManagerService,
		PingResolver,
		IntervalUseCase,
		GenerateNowDateUseCase,
		GetPingsFromCacheUseCase,
		GetPingFromValuesUseCase,
		PersistAndUpdateUserPingUseCase,
	],
})
export class PingModule {}
