import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { MikroOrmNamingStrategy } from './mikro-orm.naming-strategy';
import { databaseConfig } from './registers/database.config';

export default async (): Promise<MikroOrmModuleSyncOptions> => ({
	debug: false,
	driver: PostgreSqlDriver,
	...databaseConfig(),
	allowGlobalContext: true,
	forceUtcTimezone: true,
	tsNode: true,
	autoLoadEntities: true,
	entities: ['apps/api/src/module/**/*.entity.ts'],
	namingStrategy: MikroOrmNamingStrategy,
	migrations: {
		tableName: 'migrations',
		pathTs: 'apps/api/migrations',
		snapshot: false,
		silent: true,
	},
});
