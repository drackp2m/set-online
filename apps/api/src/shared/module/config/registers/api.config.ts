import { registerAs } from '@nestjs/config';

import { validate } from '../../../environment/env.validation';
import { ApiConfig } from '../types/api-config.type';

const config = validate(process.env);

export const apiConfig = registerAs(
	'api',
	(): ApiConfig => ({
		environment: config.NODE_ENV,
		protocol: config.API_PROTOCOL,
		domain: config.API_DOMAIN,
		prefix: config.API_PREFIX,
		port: config.API_PORT,
		cookieSecret: config.API_COOKIE_SECRET,
	}),
);
