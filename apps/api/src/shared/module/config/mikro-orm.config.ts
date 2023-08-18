import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { databaseConfig } from './registers/database.config';

export default async (): Promise<MikroOrmModuleSyncOptions> => ({
	debug: false,
	driver: PostgreSqlDriver,
	...databaseConfig(),
	allowGlobalContext: true,
	forceUtcTimezone: true,
	entities: ['not-found'],
	entitiesTs: ['apps/api/src/module/**/*.entity.ts'],
	autoLoadEntities: true,
	migrations: {
		tableName: 'migrations',
		pathTs: 'apps/api/migrations',
		snapshot: false,
		silent: true,
	},
});
