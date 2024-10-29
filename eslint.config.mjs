import { fixupPluginRules } from '@eslint/compat';
import nx from '@nx/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

export default [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		plugins: {
			'@nx': nx,
			import: fixupPluginRules(eslintPluginImport),
			'unused-imports': unusedImports,
			prettier: prettier,
		},
	},
	{
		ignores: ['**/dist', 'node_modules', 'libs/api-definitions/src/lib/apollo/operations.ts'],
	},
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.json'],
		rules: {
			'prettier/prettier': 'warn',
		},
	},
	{
		files: ['**/*.ts', '**/*.js'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
					depConstraints: [
						{
							sourceTag: '*',
							onlyDependOnLibsWithTags: ['*'],
						},
					],
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs'],
		ignores: ['**/*.spec.ts'],
		rules: {
			'max-lines': [
				'warn',
				{
					max: 200,
					skipComments: true,
				},
			],
			'max-lines-per-function': [
				'warn',
				{
					max: 75,
					skipComments: true,
					IIFEs: true,
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.mjs'],
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2023,
			sourceType: 'module',
		},
		settings: {
			'import/ignore': ['node_modules'],
			'import/resolver': {
				node: true,
				typescript: {
					project: 'tsconfig.base.json',
				},
			},
		},
		rules: {
			'unused-imports/no-unused-imports': 'warn',
			'no-unused-private-class-members': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-inferrable-types': 'warn',
			'@typescript-eslint/member-ordering': [
				'warn',
				{
					default: [
						'signature',
						'field',
						'constructor',
						'decorated-method',
						'method',
						'static-method',
						'abstract-method',
						'protected-method',
						'private-method',
					],
				},
			],
			'import/order': [
				'warn',
				{
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
					},
					pathGroups: [
						{
							pattern: '@set-online/**',
							group: 'external',
							position: 'after',
						},
					],
				},
			],
			'sort-imports': [
				'warn',
				{
					ignoreDeclarationSort: true,
				},
			],
			'padding-line-between-statements': [
				'warn',
				{
					blankLine: 'always',
					next: 'export',
					prev: '*',
				},
			],
			'no-duplicate-imports': 'warn',
			'no-multiple-empty-lines': [
				'warn',
				{
					max: 1,
				},
			],
			'space-before-blocks': ['warn', 'always'],
			'newline-before-return': ['warn'],
			curly: ['warn', 'all'],
		},
	},
	{
		files: ['**/*.spec.ts', '**/*.spec.js'],
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
	},
];
