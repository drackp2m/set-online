import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ScheduleModule } from '@nestjs/schedule';

import { ConfigurationModule } from '../../shared/module/config/configuration.module';
import { GqlFactory } from '../../shared/module/config/factories/gql.factory';
import { MikroOrmFactory } from '../../shared/module/config/factories/mikro-orm.factory';
import { apiConfig } from '../../shared/module/config/registers/api.config';
import { databaseConfig } from '../../shared/module/config/registers/database.config';
import { jwtConfig } from '../../shared/module/config/registers/jwt.config';
import { nodeCacheConfig } from '../../shared/module/config/registers/node-cache.config';
import { GqlThrottlerModule } from '../../shared/module/gql-throttler/gql-throttler.module';
import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';
import { AuthModule } from '../auth/auth.module';
import { GameModule } from '../game/game.module';
import { PingModule } from '../ping/ping.module';
import { UserModule } from '../user/user.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [databaseConfig, apiConfig, jwtConfig, nodeCacheConfig],
		}),
		ScheduleModule.forRoot(),
		MikroOrmModule.forRootAsync({
			useClass: MikroOrmFactory,
		}),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			imports: [ConfigurationModule],
			useClass: GqlFactory,
			driver: ApolloDriver,
		}),
		PubSubModule,
		GqlThrottlerModule,
		AuthModule,
		UserModule,
		GameModule,
		PingModule,
	],
	providers: [AppService],
	controllers: [AppController],
})
export class AppModule {}
