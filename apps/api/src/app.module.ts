import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
	appConfig,
	databaseConfig,
	jwtConfig,
	mikroOrmConfig,
} from './common/config';
import { GqlFactory } from './common/config/factories';
import { envSchema } from './common/utils';
import { GqlThrottlerModule } from './gql-throttler/gql-throttler.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [appConfig, databaseConfig, jwtConfig],
			validationSchema: envSchema,
			validationOptions: {
				allowUnknown: false,
			},
		}),
		MikroOrmModule.forRootAsync({
			useFactory: mikroOrmConfig,
		}),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			useClass: GqlFactory,
		}),
		GqlThrottlerModule,
		AuthModule,
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
