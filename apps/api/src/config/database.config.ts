import { registerAs } from '@nestjs/config';

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
		host: process.env['DB_HOST'] || '',
		port: parseInt(process.env['DB_PORT'] || ''),
		dbName: process.env['DB_NAME'] || '',
		user: process.env['DB_USER'] || '',
		password: process.env['DB_PASS'] || '',
	}),
);
