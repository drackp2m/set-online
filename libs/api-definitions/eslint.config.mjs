import parser from 'jsonc-eslint-parser';

import baseConfig from '../../eslint.config.mjs';

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
