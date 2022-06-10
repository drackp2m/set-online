import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configs } from './config/index';
import { GraphQLModule } from '@nestjs/graphql';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { mikroOrmConfig } from './config/mikro-orm.config';
import { envSchema } from './utils/env-schema';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ['./.env.development', './.env'],
			load: configs,
			validationSchema: envSchema,
		}),
		MikroOrmModule.forRootAsync({
			useFactory: mikroOrmConfig,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: 'apps/api/src/schema.gql',
			playground: {
				title: 'Set',
			},
			debug: true,
		}),
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
