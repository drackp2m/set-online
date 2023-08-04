import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { ConfigurationModule } from '../../shared/module/config/configuration.module';
import { ConfigurationService } from '../../shared/module/config/configuration.service';
import { GqlFactory } from '../../shared/module/config/factories/gql.factory';
import { MikroOrmFactory } from '../../shared/module/config/factories/mikro-orm.factory';
import { appConfig } from '../../shared/module/config/registers/app.config';
import { databaseConfig } from '../../shared/module/config/registers/database.config';
import { jwtConfig } from '../../shared/module/config/registers/jwt.config';
import { GqlThrottlerModule } from '../../shared/module/gql-throttler/gql-throttler.module';
import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';
import { AuthModule } from '../auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// const isTestIntegrationEnv = 'test-int' === process.env.NODE_ENV;

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			// envFilePath: isTestIntegrationEnv ? 'apps/api/.env.test-int' : '.env',
			load: [appConfig, databaseConfig, jwtConfig],
		}),
		MikroOrmModule.forRootAsync({
			useClass: MikroOrmFactory,
		}),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			imports: [ConfigurationModule],
			inject: [ConfigurationService],
			useClass: GqlFactory,
			driver: ApolloDriver,
		}),
		PubSubModule,
		GqlThrottlerModule,
		AuthModule,
	],
	providers: [AppService],
	controllers: [AppController],
})
export class AppModule {}
