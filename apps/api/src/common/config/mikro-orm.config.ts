import { existsSync, readdirSync } from 'fs';

import { AnyEntity, EntityClass } from '@mikro-orm/core';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

import { databaseConfig } from './database.config';

export default async (): Promise<MikroOrmModuleSyncOptions> => ({
	type: 'postgresql',
	...databaseConfig(),
	allowGlobalContext: true,
	entities: await getEntities(),
	forceUtcTimezone: true,
	migrations: {
		tableName: 'migrations',
		path: 'apps/api/migrations',
		snapshot: false,
	},
});

async function getEntities(): Promise<EntityClass<AnyEntity>[]> {
	const promises = readdirSync('apps/api/src/modules')
		.map((directory) => {
			if (existsSync(`apps/api/src/modules/${directory}/${directory}.entity.ts`)) {
				return require(`../../modules/${directory}/${directory}.entity.ts`);
			}
		})
		.filter((promise) => promise !== undefined);

	const modules = await Promise.all(promises);

	return modules.flatMap((module) => Object.keys(module).map((className) => module[className]));
}
