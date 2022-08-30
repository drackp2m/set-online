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

	private readonly endpoint = 'http://localhost:3000/graphql';

	private readonly playground: ApolloDriverConfig['playground'] = {
		tabs: [
			{
				endpoint: this.endpoint,
				name: 'Login',
				query: `mutation Login($input: LoginInput!) {
	login(input: $input) {
		token
		expiresOn
	}
}`,
				variables: `{
	"input": {
		"username": "drackp2m",
		"password": "password"
	}
}`,
			},
			{
				endpoint: this.endpoint,
				name: 'GetUsers',
				query: `# Write your query or mutation here
query GetUsers {
  getUsers {
    uuid
    username
    email
    createdAt
    updatedAt
  }
}
`,
			},
		],
	};

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
			playground: this.config.environment === 'development' ? true : false,
		};
	}
}
