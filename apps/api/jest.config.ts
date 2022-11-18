export default {
	displayName: 'api',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	maxWorkers: 2,
	globals: {
		'ts-jest': {
			diagnostics: {
				ignoreCodes: [151001],
			},
		},
	},
	transform: {
		'^.+\\.[tj]s$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json',
				// isolatedModules: true,
				diagnostics: {
					ignoreCodes: [151001, '151001', 'TS151001'],
				},
			},
		],
	},
	moduleFileExtensions: ['ts', 'js'],
	coverageDirectory: '../../coverage/apps/api',
	coverageReporters: ['html', ['text-summary', { skipFull: true }]],
	clearMocks: true,
};
