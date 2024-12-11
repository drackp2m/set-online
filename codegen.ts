import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://localhost:4200/graphql',
	documents: 'libs/api-definitions/src/lib/graphql/**/*.gql',
	generates: {
		'libs/api-definitions/src/lib/apollo/operations.ts': {
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
				},
			},
			// hooks: {
			//   afterOneFileWrite: ['node --run eslint libs/api-definitions/src/lib/apollo/operations.ts']
			// }
		},
	},
};

export default config;
