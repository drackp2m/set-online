import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { allConfigs } from './config/index';
import { GraphQLModule } from '@nestjs/graphql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { mikroOrmConfig } from './config/mikro-orm.config';
import { envSchema } from './utils/env-schema';
import { GraphQLConfig } from './config/grapql-module.config';

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
		MikroOrmModule.forRootAsync({
			useFactory: mikroOrmConfig,
		}),
		GraphQLModule.forRootAsync<ApolloDriverConfig>({
			driver: ApolloDriver,
			useClass: GraphQLConfig,
		}),
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
