import { jestSetup, removeDatabases } from './jest.setup';

beforeAll(async () => {
	await removeDatabases();
	await jestSetup();
});
