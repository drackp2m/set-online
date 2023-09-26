import { MikroORM } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

module.exports = async function () {
	console.log(globalThis.__TEARDOWN_MESSAGE__);

	await (globalThis.__MIKRO_ORM__ as MikroORM<PostgreSqlDriver>).close();
};
