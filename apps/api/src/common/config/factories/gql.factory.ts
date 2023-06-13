import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';

import { AppConfig } from '../app.config';

@Injectable()
export class GqlFactory implements GqlOptionsFactory {
	private readonly config: AppConfig = this.configService.get<AppConfig>('app', {
		infer: true,
	});

	constructor(private readonly configService: ConfigService) {}

	createGqlOptions(): ApolloDriverConfig {
		const isProduction = this.config.environment === 'production';

		return {
			driver: ApolloDriver,
			autoSchemaFile: true,
			// autoSchemaFile: 'apps/api/schema.gql',
			sortSchema: true,
			buildSchemaOptions: {
				dateScalarMode: 'isoDate',
				numberScalarMode: 'float',
			},
			definitions: {
				path: 'libs/api-interfaces/src/lib/schema.ts',
				// outputAs: 'class',
			},
			subscriptions: {
				'graphql-ws': true,
			},
			playground: false,
			plugins: [...(isProduction ? [] : [ApolloServerPluginLandingPageLocalDefault()])],
		};
	}
}
