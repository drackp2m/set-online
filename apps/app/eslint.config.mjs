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
		files: ['**/*.ts/1_inline-template-app.component.ts-1.component.html'],
		rules: {
			'sonarjs/no-element-overwrite': 'off',
			'sonarjs/no-same-line-conditional': 'off',
			'sonarjs/no-unenclosed-multiline-block': 'off',
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
