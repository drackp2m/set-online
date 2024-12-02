import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import nx from '@nx/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import rxjs from 'eslint-plugin-rxjs-updated';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

import eslintErrorsToWarnings from './utils/eslint-errors-to-warnings.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		plugins: {
			prettier,
			'@nx': nx,
			rxjs,
			import: eslintPluginImport,
			'unused-imports': unusedImports,
		},
		ignores: ['**/dist', 'node_modules', 'libs/api-definitions/src/lib/apollo/operations.ts'],
	},
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.json'],
		rules: {
			'prettier/prettier': 'warn',
		},
	},
	{
		files: ['**/*.ts', '**/*.js', '**/*.mjs'],
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
		ignores: ['**/*.spec.ts', '**/*.test.ts'],
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
			parserOptions: {
				project: join(__dirname, './tsconfig.base.json'),
			},
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
			// ...eslintErrorsToWarnings(sonarjs.configs.recommended.rules),
			// 'sonarjs/todo-tag': 'off',
			// 'sonarjs/fixme-tag': 'off',
			// 'sonarjs/unused-import': 'off',
			// 'sonarjs/pseudo-random': 'warn',
			...eslintErrorsToWarnings(rxjs.configs.recommended.rules),
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
							pattern: '@playsetonline/**',
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
			'no-empty': 'warn',
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
		rules: {
			'sonarjs/no-skipped-test': 'off',
			'sonarjs/no-hardcoded-credentials': 'off',
		},
	},
];
