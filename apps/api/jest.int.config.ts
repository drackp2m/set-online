/* eslint-disable */
export default {
	displayName: 'api-int',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	globalSetup: './jest.setup.ts',
	maxWorkers: 2,
	testMatch: [ "**/?(*.)+(int.spec|int.test).[jt]s?(x)" ],
	transform: {
		'^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/api',
	coverageReporters: ['html', 'lcov', ['text-summary', { skipFull: true }]],
	clearMocks: true,
};
