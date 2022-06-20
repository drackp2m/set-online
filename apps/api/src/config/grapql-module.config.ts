import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { AppConfig } from './app.config';

@Injectable()
export class GraphQLConfig implements GqlOptionsFactory {
	private readonly playground: ApolloDriverConfig['playground'] = {
		tabs: [
			{
				endpoint: 'http://localhost:3000/graphql',
				name: 'GetAllUsers',
				query: `# Write your query or mutation here
query GetAllUsers {
  getAllUsers {
    uuid
    username
    email
    password
    createdAt
    updatedAt
  }
}
`,
			},
		],
	};

	constructor(private configService: ConfigService) {}

	createGqlOptions(): ApolloDriverConfig {
		const config: AppConfig = this.configService.get<AppConfig>('app', {
			infer: true,
		});

		return {
			autoSchemaFile: 'apps/api/src/schema.gql',
			introspection: true,
			debug: true,
			definitions: {
				path: 'libs/api-interfaces/src/lib/schema.ts',
				outputAs: 'class',
			},
			playground:
				config.environment === 'development' ? this.playground : false,
		};
	}
}
