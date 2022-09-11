export default {
	displayName: 'api',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json',
			// isolatedModules: true,
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
	maxWorkers: 1,
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/api',
	coverageReporters: ['html', ['text-summary', { skipFull: true }]],
};
