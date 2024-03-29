import { readFileSync } from 'node:fs';

import { INestApplication, Logger, NestApplicationOptions, ValidationPipe } from '@nestjs/common';

import { ConfigurationService } from '../module/config/configuration.service';
import { AppConfig } from '../module/config/types/app-config.type';

import { HttpExceptionFilter } from './exception-filter';

export class BootstrapHelper {
	static nestApplicationOptions: NestApplicationOptions = {
		httpsOptions: {
			key: readFileSync('certs/set-self-signed.key'),
			cert: readFileSync('certs/set-self-signed.crt'),
		},
	};

	static validationPipe = new ValidationPipe({
		whitelist: true,
		transform: true,
	});

	static exceptionsFilter = new HttpExceptionFilter();

	static appConfig = (app: INestApplication): AppConfig => {
		const configService = app.get(ConfigurationService);

		return configService.app;
	};

	static logAppBootstrap = (app: INestApplication): void => {
		const appConfig = BootstrapHelper.appConfig(app);

		const playgroundUrl = `${appConfig.protocol}://${appConfig.domain}:${appConfig.port}/graphql`;

		Logger.log(
			`🚀 GraphQL Playground ready at ${playgroundUrl}, started in ${process.uptime().toFixed(3)}s`,
			'Bootstrap',
		);
	};
}
