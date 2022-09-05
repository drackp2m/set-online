export default {
	displayName: 'api',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json',
		},
	},
	transform: {
		'^.+\\.[tj]s$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json',
				diagnostics: {
					ignoreCodes: [151001],
				},
			},
		],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/api',
	coverageReporters: ['html', ['text', { skipFull: true }]],
};
