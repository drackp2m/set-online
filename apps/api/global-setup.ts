import { MikroORM } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/postgresql';

module.exports = async function () {
	console.log('\nSetting up...\n');

	globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';

	await MikroORM.init(
		defineConfig({
			clientUrl: 'postgresql://user:pass@localhost/db_name',
			entities: ['apps/api/src/module/**/*.entity.ts'],
			connect: false,
		}),
	);
};
