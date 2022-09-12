export default {
	displayName: 'api',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	maxWorkers: 1,
	transform: {
		'^.+\\.[tj]s$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.spec.json',
				isolatedModules: true,
				diagnostics: {
					ignoreCodes: ['TS151001'],
				},
			},
		],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/api',
	coverageReporters: ['html', ['text-summary', { skipFull: true }]],
};
