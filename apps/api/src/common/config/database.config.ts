import { registerAs } from '@nestjs/config';

import { validate } from '../utils';

interface DatabaseConfig {
	host: string;
	port: number;
	dbName: string;
	user: string;
	password: string;
}

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
