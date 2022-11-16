import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';

import { AppConfig } from '../app.config';

@Injectable()
export class GqlFactory implements GqlOptionsFactory {
	private readonly config: AppConfig = this.configService.get<AppConfig>(
		'app',
		{
			infer: true,
		},
	);

	private readonly endpoint = `${this.config.protocol}://${this.config.domain}:${this.config.port}${this.config.prefix}/graphql`;

	constructor(private readonly configService: ConfigService) {}

	createGqlOptions(): ApolloDriverConfig {
		return {
			autoSchemaFile: 'apps/api/schema.gql',
			buildSchemaOptions: {
				dateScalarMode: 'isoDate',
				numberScalarMode: 'float',
			},
			definitions: {
				path: 'libs/api-interfaces/src/lib/schema.ts',
				// outputAs: 'class',
			},
			playground: this.config.environment === 'development',
			subscriptions: {
				'graphql-ws': true,
			},
		};
	}
}
