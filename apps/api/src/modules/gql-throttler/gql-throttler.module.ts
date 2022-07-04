import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { GqlThrottlerGuard } from '../../guards/gql-throttler.guard';

@Module({
	imports: [
		ThrottlerModule.forRoot({
			ttl: 1,
			limit: 1,
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
