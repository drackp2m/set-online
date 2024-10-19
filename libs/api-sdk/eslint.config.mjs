import parser from 'jsonc-eslint-parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import baseConfig from '../../eslint.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
	...baseConfig,
	{
		ignores: ['!**/*'],
	},
	{
		files: ['**/*.ts', '**/*.js'],
		rules: {},
	},
	{
		files: ['**/*.ts'],
		rules: {},
	},
	{
		files: ['**/*.js'],
		rules: {},
	},
	{
		files: ['**/*.json'],
		languageOptions: {
			parser: parser,
		},
		rules: {
			'@nx/dependency-checks': 'error',
		},
	},
];
