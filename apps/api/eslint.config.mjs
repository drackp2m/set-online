import baseConfig from '../../eslint.config.mjs';

export default [
	...baseConfig,
	{
		ignores: ['!**/*'],
	},
	{
		files: ['**/*.spec.ts'],
		rules: {
			'max-lines-per-function': 'off',
		},
	},
];
