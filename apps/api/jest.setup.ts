import { MikroORM } from '@mikro-orm/postgresql';

import databaseConfig from './src/shared/module/config/mikro-orm.config';

module.exports = async function (_globalConfig, _projectConfig) {
	const config = await databaseConfig();

	const orm = await MikroORM.init(config);

	const migrator = orm.getMigrator();

	const migratorCheckResult = await migrator.checkMigrationNeeded();

	if (migratorCheckResult) {
		await migrator.up();
	}
};
