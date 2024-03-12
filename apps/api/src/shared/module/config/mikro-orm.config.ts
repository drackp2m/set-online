import { Migrator } from '@mikro-orm/migrations';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { MikroOrmNamingStrategy } from './mikro-orm.naming-strategy';
import { databaseConfig } from './registers/database.config';

export default async (): Promise<MikroOrmModuleSyncOptions> => ({
	debug: false,
	driver: PostgreSqlDriver,
	...databaseConfig(),
	allowGlobalContext: false,
	forceUtcTimezone: true,
	tsNode: true,
	autoLoadEntities: true,
	extensions: [Migrator],
	entities: ['apps/api/src/module/**/*.entity.ts'],
	namingStrategy: MikroOrmNamingStrategy,
	migrations: {
		tableName: 'migrations',
		path: 'apps/api/migrations',
		// snapshot: false,
		silent: true,
	},
});
