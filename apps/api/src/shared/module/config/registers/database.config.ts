import { registerAs } from '@nestjs/config';

import { validate } from '../../../environment/env.validation';
import { DatabaseConfig } from '../types/database-config.type';

const config = validate(process.env);

const isProduction = config.NODE_ENV === 'production';

export const databaseConfig = registerAs(
	'database',
	(): DatabaseConfig => ({
		host: config.DB_HOST,
		port: isProduction ? config.DB_PORT : 5432,
		dbName: config.DB_NAME,
		user: config.DB_USER,
		password: config.DB_PASS,
	}),
);
