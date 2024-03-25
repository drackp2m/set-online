import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { Context } from 'graphql-ws';

import { JwtCookie } from '../../../../module/auth/definition/jwt-cookie.enum';
import { CheckJwtTokenUseCase } from '../../../../module/auth/use-case/check-jwt-token.use-case';
import { GraphqlWsConnectionExtraInterface } from '../../../interface/graphql-ws-connection-extra.interface';
import { ConfigurationService } from '../configuration.service';

@Injectable()
export class GqlFactory implements GqlOptionsFactory {
	constructor(
		private readonly configurationService: ConfigurationService,
		private readonly checkJwtToken: CheckJwtTokenUseCase,
	) {}

	createGqlOptions(): ApolloDriverConfig {
		const isProduction = this.configurationService.app.environment === 'production';

		return {
			driver: ApolloDriver,
			autoSchemaFile: 'apps/api/src/schema.gql',
			sortSchema: true,
			context: ({ req, res }) => ({ req, res }),
			includeStacktraceInErrorResponses: !isProduction,
			buildSchemaOptions: {
				dateScalarMode: 'isoDate',
				numberScalarMode: 'float',
				noDuplicatedFields: true,
			},
			definitions: {
				path: 'libs/api-definitions/src/lib/graphql/definitions.ts',
			},
			subscriptions: {
				'graphql-ws': {
					path: '/graphql',
					onConnect: (
						context: Context<Record<string, unknown>, GraphqlWsConnectionExtraInterface>,
					) => {
						// ToDo => move this to help function

						const accessTokenParts = context.extra.request.rawHeaders
							.find((header) => header.includes(JwtCookie.access))
							?.split('=')[1]
							.replace('s%3A', '')
							.split('.');

						accessTokenParts.pop();

						const accessToken = accessTokenParts?.join('.');

						if (accessToken) {
							try {
								this.checkJwtToken.execute(accessToken, 'access');
							} catch (error) {
								return false;
							}
						}

						return true;
					},
				},
			},
			playground: false,
			plugins: [...(isProduction ? [] : [ApolloServerPluginLandingPageLocalDefault()])],
		};
	}
}
