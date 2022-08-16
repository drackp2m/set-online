/* eslint-disable */
export default {
	displayName: 'api',
	preset: '../../jest.preset.js',
	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/tsconfig.spec.json',
		},
	},
	testEnvironment: 'node',
	transform: {
		'^.+\\.[tj]s$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	moduleNameMapper: {
		"uuid": require.resolve('uuid'),
	},
	coverageDirectory: '../../coverage/apps/api',
};
