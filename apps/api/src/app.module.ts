import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GqlFactory } from './common/config/factories/gql.factory';
import { allConfigs } from './common/config/index';
import { mikroOrmConfig } from './common/config/mikro-orm.config';
import { envSchema } from './common/utils/env-schema';
import { GqlThrottlerModule } from './gql-throttler/gql-throttler.module';
import { UserModule } from './user/user.module';

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
