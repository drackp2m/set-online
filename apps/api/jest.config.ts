// import { readFileSync } from 'fs';

import type { Config } from 'jest';
// const swcConfig = JSON.parse(readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

const config: Config = {
	displayName: 'api',
	preset: '../../jest.preset.js',
	coverageProvider: 'v8',
	coveragePathIgnorePatterns: [],
	testEnvironment: 'node',
	globalSetup: '<rootDir>/global-setup.ts',
	globalTeardown: '<rootDir>/global-teardown.ts',
	maxWorkers: 4,
	testPathIgnorePatterns: ['.int.spec.ts$'],
	transform: {
		// '^.+\\.(t|j)s$': ['@swc/jest', { ...swcConfig }],
		'^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/api',
	coverageReporters: ['html', 'lcov', ['text', { skipFull: true }], 'text-summary'],
	clearMocks: true,
};

export default config;
