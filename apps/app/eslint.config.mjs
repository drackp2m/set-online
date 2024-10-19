import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import baseConfig from '../../eslint.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	...baseConfig,
	{
		ignores: ['!**/*'],
	},
	...compat
		.extends('plugin:@nx/angular', 'plugin:@angular-eslint/template/process-inline-templates')
		.map((config) => ({
			...config,
			files: ['**/*.ts'],
			rules: {
				'@angular-eslint/directive-selector': [
					'warn',
					{
						type: 'attribute',
						prefix: 'set',
						style: 'camelCase',
					},
				],
				'@angular-eslint/component-selector': [
					'warn',
					{
						type: 'element',
						prefix: 'set',
						style: 'kebab-case',
					},
				],
				'@angular-eslint/component-class-suffix': [
					'warn',
					{
						suffixes: ['Component', 'Page', 'Layout'],
					},
				],
			},
		})),
	...compat.extends('plugin:prettier/recommended', 'plugin:@nx/angular-template').map((config) => ({
		...config,
		files: ['**/*.html'],
		rules: {
			'prettier/prettier': 'warn',
		},
	})),
];
