// import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { User } from '../modules/user/user.entity';
import { databaseConfig } from './database.config';

export const mikroOrmConfig = async (): Promise<MikroOrmModuleSyncOptions> =>
	({
		type: 'postgresql',
		...databaseConfig(),
		allowGlobalContext: true,
		// loadStrategy: LoadStrategy.JOINED,
		entities: [ User ],
		// forceUtcTimezone: false,
		migrations: {
			tableName: 'migrations',
			path: 'apps/api/src/migrations',
		},
	});

export default mikroOrmConfig();
