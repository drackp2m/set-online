import { existsSync, readdirSync } from 'fs';

import { AnyEntity, EntityClass } from '@mikro-orm/core';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { defineConfig } from '@mikro-orm/postgresql';

import { databaseConfig } from './registers/database.config';

export default async (): Promise<MikroOrmModuleSyncOptions> =>
	defineConfig({
		...databaseConfig(),
		allowGlobalContext: true,
		entities: await getEntities(),
		entitiesTs: ['apps/api/src/module/**/*.entity.ts'],
		forceUtcTimezone: true,
		migrations: {
			tableName: 'migrations',
			path: 'apps/api/migrations',
			snapshot: false,
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
