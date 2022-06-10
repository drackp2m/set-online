import { AnyEntity } from '@mikro-orm/core';
import { configs } from '.';
import { ConfigModule } from '@nestjs/config';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { readdirSync } from 'fs';
import { envSchema } from '../utils/env-schema';

async function getEntities(): Promise<AnyEntity[]> {
	if (process.env.WEBPACK) {
		const modules = require.context('../modules', true, /\.ts$/);

		return modules
			.keys()
			.map((r) => modules(r))
			.flatMap((mod) => Object.keys(mod).map((className) => mod[className]));
	}

	const promises = readdirSync('apps/api/src/modules').map(
		(file) => import(`../modules/${file}/${file}.entity.ts`),
	);
	const modules = await Promise.all(promises);

	return modules.flatMap((mod) =>
		Object.keys(mod).map((className) => mod[className]),
	);
}

ConfigModule.forRoot({
	isGlobal: true,
	envFilePath: ['apps/api/.env.development', 'apps/api/.env'],
	load: configs,
	validationSchema: envSchema,
});

export const mikroOrmConfig = async () =>
	({
		...configs[0](),
		type: 'postgresql',
		autoLoadEntities: true,
		entities: await getEntities(),
		migrations: {
			tableName: 'migrations',
			path: 'apps/api/src/migrations',
			transactional: true,
		},
	} as MikroOrmModuleSyncOptions);

export default mikroOrmConfig();
