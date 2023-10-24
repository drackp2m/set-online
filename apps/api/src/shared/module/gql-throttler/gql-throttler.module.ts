import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';

import { GqlThrottlerGuard } from './guards/gql-throttler.guard';

@Module({
	imports: [
		ThrottlerModule.forRoot({
			throttlers: [
				{
					ttl: 60,
					limit: 100,
				},
			],
		}),
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: GqlThrottlerGuard,
		},
	],
})
export class GqlThrottlerModule {}
