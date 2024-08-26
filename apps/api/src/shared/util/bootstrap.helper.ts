import { readFileSync } from 'node:fs';

import { INestApplication, Logger, NestApplicationOptions, ValidationPipe } from '@nestjs/common';

import { ConfigurationService } from '../module/config/configuration.service';
import { ApiConfig } from '../module/config/types/api-config.type';

import { HttpExceptionFilter } from './exception-filter';

export class BootstrapHelper {
	static validationPipe = new ValidationPipe({
		whitelist: true,
		transform: true,
	});

	static exceptionsFilter = new HttpExceptionFilter();

	static nestApplicationOptions = (appConfig: ApiConfig): NestApplicationOptions => {
		let httpsOptions;

		if (appConfig.environment !== 'production') {
			httpsOptions = {
				key: readFileSync('certs/set-self-signed.key'),
				cert: readFileSync('certs/set-self-signed.crt'),
			};
		}

		return { httpsOptions };
	};

	static apiConfig = (app: INestApplication): ApiConfig => {
		const configService = app.get(ConfigurationService);

		return configService.api;
	};

	static logAppBootstrap = (appConfig: ApiConfig): void => {
		const isProduction = appConfig.environment === 'production';
		const port = isProduction ? '' : `:${appConfig.port}`;

		const playgroundUrl = `${appConfig.protocol}://${appConfig.domain}${port}/graphql`;
		const uptime = process.uptime().toFixed(3);
		const exposedPortInfo = isProduction ? ` and exposed on port ${appConfig.port}` : '';

		Logger.log(
			`🚀 GraphQL Playground ready at ${playgroundUrl} in ${uptime}s` + exposedPortInfo,
			'Bootstrap',
		);
	};
}
