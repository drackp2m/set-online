import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { GqlThrottlerModule } from '../../gql-throttler/gql-throttler.module';
import { AuthModule } from '../../modules/auth/auth.module';
import { UserModule } from '../../modules/user/user.module';
import { ConfigurationModule } from '../../shared/config/configuration.module';
import { ConfigurationService } from '../../shared/config/configuration.service';
import { GqlFactory } from '../../shared/config/factories/gql.factory';
import { MikroOrmFactory } from '../../shared/config/factories/mikro-orm.factory';
import { appConfig } from '../../shared/config/registers/app.config';
import { databaseConfig } from '../../shared/config/registers/database.config';
import { jwtConfig } from '../../shared/config/registers/jwt.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
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
		GqlThrottlerModule,
		AuthModule,
		UserModule,
	],
	exports: [MikroOrmModule],
	providers: [AppService, ConfigurationService],
	controllers: [AppController],
})
export class AppModule {}
