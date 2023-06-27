import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { ConfigurationModule } from '../../common/config/configuration.module';
import { ConfigurationService } from '../../common/config/configuration.service';
import { GqlFactory, MikroOrmFactory } from '../../common/config/factories';
import { appConfig, databaseConfig, jwtConfig } from '../../common/config/registers';
import { GqlThrottlerModule } from '../../gql-throttler/gql-throttler.module';
import { AuthModule } from '../../modules/auth/auth.module';
import { UserModule } from '../../modules/user/user.module';

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
	controllers: [AppController],
	providers: [AppService, ConfigurationService],
})
export class AppModule {}
