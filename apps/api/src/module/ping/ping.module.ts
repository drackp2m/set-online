import { Module } from '@nestjs/common';

import { NodeCacheService } from '../../shared/service/node-cache.service';

import { PingResolver } from './ping.resolver';

@Module({
	providers: [PingResolver, NodeCacheService],
})
export class PingModule {}
