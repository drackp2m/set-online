import { registerAs } from '@nestjs/config';

import { EnvEnvironment, EnvProtocol, processEnv } from '../utils/env-schema';

export interface AppConfig {
	environment: EnvEnvironment;
	protocol: EnvProtocol;
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
