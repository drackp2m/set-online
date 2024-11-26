import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { registerAs } from '@nestjs/config';

import { validate } from '../../../environment/env.validation';

const config = validate(process.env);

const driverOptions = config.NODE_ENV === 'production' && {
	driverOptions: { connection: { ssl: { ca: config.DB_CERT } } },
};

export const databaseConfig = registerAs(
	'database',
	(): MikroOrmModuleSyncOptions => ({
		host: config.DB_HOST,
		port: config.DB_PORT,
		user: config.DB_USER,
		password: config.DB_PASS,
		dbName: config.NODE_ENV === 'test' ? config.DB_NAME_TEST : config.DB_NAME,
		...driverOptions,
	}),
);
