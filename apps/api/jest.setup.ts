import { EntityManager, MikroORM } from '@mikro-orm/postgresql';

import dbConfig from './src/shared/module/config/mikro-orm.config';

const removeDatabases = async () => {
	const config = await dbConfig();
	const orm = await MikroORM.init(config);

	const em: EntityManager = orm.em as EntityManager;

	await em.execute('DROP TABLE IF EXISTS users;');
	await em.execute('DROP TABLE IF EXISTS migrations;');
};

const jestSetup = async () => {
	const config = await dbConfig();
	const orm = await MikroORM.init(config);
	const migrator = orm.getMigrator();
	const migratorCheckResult = await migrator.checkMigrationNeeded();

	if (migratorCheckResult) {
		await migrator.up();
	}

	await orm.close(true);
};

export { removeDatabases, jestSetup };

export default jestSetup;
