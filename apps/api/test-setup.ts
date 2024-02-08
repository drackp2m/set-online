import { EntityManager, MikroORM } from '@mikro-orm/postgresql';

import dbConfig from './src/shared/module/config/mikro-orm.config';

module.exports = async function () {
	await dropDatabases();

	await executeMigrations();
};

const dropDatabases = async () => {
	const config = await dbConfig();
	const orm = await MikroORM.init(config);

	const em: EntityManager = orm.em as EntityManager;

	await em.execute('DROP TABLE IF EXISTS games_participants;');
	await em.execute('DROP TABLE IF EXISTS games;');
	await em.execute('DROP TABLE IF EXISTS users;');
	await em.execute('DROP TABLE IF EXISTS migrations;');
};

const executeMigrations = async () => {
	log('Checking migrations...\n');

	const config = await dbConfig();
	const orm = await MikroORM.init(config);
	const migrator = orm.getMigrator();
	const migratorCheckResult = await migrator.checkMigrationNeeded();

	if (migratorCheckResult) {
		const list = await migrator.up();

		log(`Executed ${list.length} migrations:`);

		list.forEach((item) => {
			log(`  - ${item.name}`);
		});

		log(`\n`);
	}

	await orm.close(true);
};

const log = (message: string): void => {
	process.stdout.write(`${message}\n`);
};
