import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { Context } from 'graphql-ws';

import { CheckJwtTokenUseCase } from '../../../../module/auth/use-case/check-jwt-token.use-case';
import { User } from '../../../../module/user/user.entity';
import { UserRepository } from '../../../../module/user/user.repository';
import { GraphqlWsConnectionExtraInterface } from '../../../interface/graphql-ws-connection-extra.interface';
import { ConfigurationService } from '../configuration.service';

@Injectable()
export class GqlFactory implements GqlOptionsFactory {
	constructor(
		private readonly configurationService: ConfigurationService,
		private readonly checkJwtToken: CheckJwtTokenUseCase,
		private readonly userRepository: UserRepository,
	) {}

	createGqlOptions(): ApolloDriverConfig {
		const isProduction = this.configurationService.app.environment === 'production';

		return {
			driver: ApolloDriver,
			autoSchemaFile: 'apps/api/src/schema.gql',
			sortSchema: true,
			context: ({ req, res }: { req: unknown; res: unknown }) => ({ req, res }),
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
				'subscriptions-transport-ws': false,
				'graphql-ws': {
					path: '/graphql',
					onConnect: async (context: Context<Record<string, unknown>, unknown>) => {
						console.log('on connect');
						// ToDo => move this to help function

						const extra = context.extra as GraphqlWsConnectionExtraInterface & {
							user: { user: User };
						};

						console.log(extra.request.rawHeaders);

						return true;

						// const accessTokenParts = context.extra.request.rawHeaders
						// 	.find((header) => header.includes(JwtCookie.access))
						// 	?.split('=')[1]
						// 	.replace('s%3A', '')
						// 	.split('.');

						// accessTokenParts?.pop();

						// const accessToken = accessTokenParts?.join('.');

						// if (!accessToken) {
						// 	throw new UnauthorizedException('Unauthorized');
						// }

						// try {
						// 	const checkedAccessToken = this.checkJwtToken.execute(accessToken, 'access');

						// 	const user = await this.userRepository.getOne({ uuid: checkedAccessToken.sub });

						// 	context.extra.user = { user };
						// } catch (error) {
						// 	throw new UnauthorizedException('Unauthorized');
						// }
					},
				},
			},
			playground: false,
			plugins: [...(isProduction ? [] : [ApolloServerPluginLandingPageLocalDefault()])],
		};
	}
}
