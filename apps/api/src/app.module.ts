import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GqlFactory } from './config/factories/gql.factory';
import { allConfigs } from './config/index';
import { mikroOrmConfig } from './config/mikro-orm.config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { envSchema } from './utils/env-schema';
import { GqlThrottlerModule } from './modules/gql-throttler/gql-throttler.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: allConfigs,
			validationSchema: envSchema,
			validationOptions: {
				allowUnknown: false,
			},
		}),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			useClass: GqlFactory,
		}),
		MikroOrmModule.forRootAsync({
			useFactory: mikroOrmConfig,
		}),
		GqlThrottlerModule,
		AuthModule,
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
