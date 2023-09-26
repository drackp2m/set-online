import { MikroORM } from '@mikro-orm/core';
import { defineConfig } from '@mikro-orm/postgresql';

module.exports = async function () {
	console.log('\nSetting up...\n');

	globalThis.__TEARDOWN_MESSAGE__ = '\nTearing down...\n';

	globalThis.__MIKRO_ORM__ = await MikroORM.init(
		defineConfig({
			clientUrl: 'postgresql://user:pass@localhost/db_name',
			connect: false,
		}),
	);
};
