import nx from '@nx/eslint-plugin';

import baseConfig from '../../eslint.config.mjs';

export default [
	...baseConfig,
	...nx.configs['flat/angular'],
	...nx.configs['flat/angular-template'],
	{
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
	},
	{
		files: ['**/*.html'],
		rules: {
			'prettier/prettier': 'warn',
			'@angular-eslint/template/click-events-have-key-events': 'warn',
			'@angular-eslint/template/interactive-supports-focus': 'warn',
		},
	},
];
