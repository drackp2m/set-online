import { registerAs } from '@nestjs/config';

import { validate } from '../../environment/env.validation';
import { AppConfig } from '../types/app-config.type';

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
