import { registerAs } from '@nestjs/config';
import { processEnv } from '../utils/env-schema';

export interface AppConfig {
	environment: 'production' | 'development' | 'test';
	protocol: 'http' | 'https';
	domain: string;
	prefix: string;
	port: number;
}

export const appConfig = registerAs(
	'app',
	(): AppConfig => ({
		environment: processEnv.ENVIRONMENT,
		protocol: processEnv.API_PROTOCOL,
		domain: processEnv.API_DOMAIN,
		prefix: processEnv.API_PREFIX,
		port: processEnv.API_PORT,
	}),
);
