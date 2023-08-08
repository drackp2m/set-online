import { registerAs } from '@nestjs/config';

import { validate } from '../../../environment/env.validation';
import { DatabaseConfig } from '../types/database-config.type';

const config = validate(process.env);

export const databaseConfig = registerAs(
	'database',
	(): DatabaseConfig => ({
		host: config.DB_HOST,
		port: config.DB_PORT,
		dbName: config.DB_NAME,
		user: config.DB_USER,
		password: config.DB_PASS,
	}),
);
