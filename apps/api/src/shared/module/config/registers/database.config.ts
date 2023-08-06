import { registerAs } from '@nestjs/config';

import { validate } from '../../../environment/env.validation';
import { DatabaseConfig } from '../types/database-config.type';

// const isTestIntegrationEnv = ['test-int', 'test'].includes(process.env.NODE_ENV);

// const dotenvConfig = dotenvConfigLoader({
// 	path: isTestIntegrationEnv ? 'apps/api/.env.test-int' : '.env',
// });

// const config = validate(dotenvConfig.parsed);

const config = validate(process.env);

console.log(config.DB_NAME);

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
