import nx from '@nx/eslint-plugin';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import { fixupPluginRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: ['node_modules', 'libs/api-definitions/src/lib/apollo/operations.ts'],
	},
	{
		plugins: {
			'@nx': nx,
		},
	},
	{
		files: ['**/*.ts', '**/*.js'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: [],
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
	...compat.extends('plugin:@nx/typescript').map((config) => ({
		...config,
		files: ['**/*.ts'],
		plugins: {
			'@typescript-eslint': typescriptEslint,
			import: fixupPluginRules(_import),
			'unused-imports': unusedImports,
		},
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
			'max-lines': [
				'warn',
				{
					max: 400,
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
			'unused-imports/no-unused-imports': 'error',
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
	})),
	...compat.extends('plugin:@nx/javascript').map((config) => ({
		...config,
		files: ['**/*.js'],
	})),
	...compat.extends('plugin:prettier/recommended').map((config) => ({
		...config,
		files: ['**/*.ts', '**/*.js', '**/*.mjs', '**/*.json'],
		rules: {
			'prettier/prettier': 'warn',
		},
	})),
	{
		files: ['**/*.spec.ts', '**/*.spec.js'],
		languageOptions: {
			globals: {
				...globals.jest,
			},
		},
	},
];
