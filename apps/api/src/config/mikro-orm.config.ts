// import { LoadStrategy } from '@mikro-orm/core';
import { AnyEntity, EntityClass } from '@mikro-orm/core';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { existsSync, readdirSync } from 'fs';
import { databaseConfig } from './database.config';

async function getEntities(): Promise<EntityClass<AnyEntity>[]> {
	const promises = readdirSync('apps/api/src/')
		.map((directory) => {
			if (existsSync(`apps/api/src/${directory}/${directory}.entity.ts`)) {
				return import(`../${directory}/${directory}.entity.ts`);
			}
		})
		.filter((promise) => promise !== undefined);

	const modules = await Promise.all(promises);

	return modules.flatMap((module) =>
		Object.keys(module).map((className) => module[className]),
	);
}

export const mikroOrmConfig = async (): Promise<MikroOrmModuleSyncOptions> => ({
	type: 'postgresql',
	...databaseConfig(),

	entities: await getEntities(),
	// entities: ['**/*.entity.ts'],

	// implicitTransactions: true,
	// allowGlobalContext: true,
	// loadStrategy: LoadStrategy.JOINED,
	forceUtcTimezone: true,
	migrations: {
		tableName: 'migrations',
		path: 'apps/api/src/migrations',
	},
});

export default mikroOrmConfig();
