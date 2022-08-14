import { AnyEntity, LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { existsSync, readdirSync } from 'fs';
import { databaseConfig } from './database.config';

async function getEntities(): Promise<AnyEntity[]> {
	const promises = readdirSync('apps/api/src/modules')
		.map((file) => {
			if (existsSync(`apps/api/src/modules/${file}/${file}.entity.ts`)) {
				return import(`../modules/${file}/${file}.entity.ts`);
			}
		})
		.filter((promise) => promise !== undefined);

	const modules = await Promise.all(promises);

	return modules.flatMap((mod) =>
		Object.keys(mod).map((className) => mod[className]),
	);
}

export const mikroOrmConfig = async () =>
	({
		type: 'postgresql',
		...databaseConfig(),
		allowGlobalContext: true,
		loadStrategy: LoadStrategy.JOINED,
		entities: await getEntities(),
		// forceUtcTimezone: false,
		migrations: {
			tableName: 'migrations',
			path: 'apps/api/src/migrations',
			transactional: true,
		},
	} as MikroOrmModuleSyncOptions);

export default mikroOrmConfig();
