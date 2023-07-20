import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';

import { ConfigurationService } from '../configuration.service';

@Injectable()
export class GqlFactory implements GqlOptionsFactory {
	constructor(private readonly config: ConfigurationService) {}

	createGqlOptions(): ApolloDriverConfig {
		const isProduction = this.config.app.environment === 'production';

		return {
			driver: ApolloDriver,
			autoSchemaFile: true,
			sortSchema: true,
			context: ({ req, res }) => ({ req, res }),
			includeStacktraceInErrorResponses: !isProduction,
			buildSchemaOptions: {
				dateScalarMode: 'isoDate',
				numberScalarMode: 'float',
			},
			definitions: {
				path: 'libs/api-definitions/src/lib/graphql/definitions.ts',
			},
			subscriptions: {
				'graphql-ws': {
					path: '/graphql',
				},
			},
			playground: false,
			plugins: [...(isProduction ? [] : [ApolloServerPluginLandingPageLocalDefault()])],
		};
	}
}
