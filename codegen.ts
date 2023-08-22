import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://localhost:3000/graphql',
	documents: 'libs/api-definitions/src/lib/graphql/**/*.gql',
	generates: {
		'apps/app/src/graphql/apollo-operations.ts': {
			plugins: [
				'typescript',
				'fragment-matcher',
				'typescript-operations',
				'typescript-apollo-angular',
			],
			config: {
				namingConvention: 'keep',
				addExplicitOverride: true,
				scalars: {
					DateTime: 'Date',
				}
			},
      hooks: {
        afterOneFileWrite: ['yarn eslint:fix apps/app/src/graphql/apollo-operations.ts']
      }
		},
	},
};

export default config;
