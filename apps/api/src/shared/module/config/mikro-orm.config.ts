import { existsSync, readdirSync } from 'node:fs';

import { AnyEntity, EntityClass } from '@mikro-orm/core';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

import { databaseConfig } from './registers/database.config';

export default async (): Promise<MikroOrmModuleSyncOptions> => ({
	debug: false,
	driver: PostgreSqlDriver,
	...databaseConfig(),
	allowGlobalContext: true,
	forceUtcTimezone: true,
	entities: await getEntities(),
	migrations: {
		tableName: 'migrations',
		pathTs: 'apps/api/migrations',
		snapshot: false,
		silent: true,
	},
});

async function getEntities(): Promise<EntityClass<AnyEntity>[]> {
	const promises = readdirSync('apps/api/src/module')
		.map((directory) => {
			if (existsSync(`apps/api/src/module/${directory}/${directory}.entity.ts`)) {
				return require(`../../../module/${directory}/${directory}.entity.ts`);
			}
		})
		.filter((promise) => promise !== undefined);

	const modules = await Promise.all(promises);

	return modules.flatMap((module) => Object.keys(module).map((className) => module[className]));
}
