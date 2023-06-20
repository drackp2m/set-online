/* eslint-disable */
export default {
	displayName: 'api',
	preset: '../../jest.preset.js',
	testEnvironment: 'node',
	maxWorkers: 2,
	transform: {
		'^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/api',
	coverageReporters: ['html', 'lcov', ['text-summary', { skipFull: true }]],
	clearMocks: true,
};
