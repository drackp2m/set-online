import { Module } from '@nestjs/common';

import { NodeCacheService } from '../../shared/service/node-cache.service';

import { PingController } from './ping.controller';

@Module({
	providers: [NodeCacheService],
	controllers: [PingController],
})
export class PingModule {}
