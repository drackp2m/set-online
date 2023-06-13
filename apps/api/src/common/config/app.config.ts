import { registerAs } from '@nestjs/config';

import { ApiProtocol, NodeEnv } from '../environment';
import { validate } from '../utils';

export interface AppConfig {
	environment: NodeEnv;
	protocol: ApiProtocol;
	domain: string;
	prefix: string;
	port: number;
}

const config = validate(process.env);

export const appConfig = registerAs(
	'app',
	(): AppConfig => ({
		environment: config.NODE_ENV,
		protocol: config.API_PROTOCOL,
		domain: config.API_DOMAIN,
		prefix: config.API_PREFIX,
		port: config.API_PORT,
	}),
);
