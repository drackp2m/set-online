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
			// autoSchemaFile: 'libs/api-interfaces/src/lib/graphql/schema.graphql',
			sortSchema: true,
			context: ({ req, res }) => ({ req, res }),
			includeStacktraceInErrorResponses: !isProduction,
			// definitions: {
			// 	path: 'libs/api-interfaces/src/lib/graphql/definitions.ts',
			// },
			buildSchemaOptions: {
				dateScalarMode: 'isoDate',
				numberScalarMode: 'float',
			},
			subscriptions: {
				'graphql-ws': true,
			},
			playground: false,
			plugins: [...(isProduction ? [] : [ApolloServerPluginLandingPageLocalDefault()])],
		};
	}
}
