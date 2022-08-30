import { registerAs } from '@nestjs/config';

import { processEnv } from '../utils/env-schema';

export interface DatabaseConfig {
	host: string;
	port: number;
	dbName: string;
	user: string;
	password: string;
}

export const databaseConfig = registerAs(
	'database',
	(): DatabaseConfig => ({
		host: processEnv.DB_HOST,
		port: processEnv.DB_PORT,
		dbName: processEnv.DB_NAME,
		user: processEnv.DB_USER,
		password: processEnv.DB_PASS,
	}),
);
