import { readFileSync } from 'fs';

import { INestApplication, Logger, NestApplicationOptions, ValidationPipe } from '@nestjs/common';

import { ConfigurationService } from '../module/config/configuration.service';
import { AppConfig } from '../module/config/types/app-config.type';

export class BootstrapHelper {
	static nestApplicationOptions: NestApplicationOptions = {
		httpsOptions: {
			key: readFileSync('certs/set-selfsigned.key'),
			cert: readFileSync('certs/set-selfsigned.crt'),
		},
	};

	static validationPipe = new ValidationPipe({
		whitelist: true,
		transform: true,
	});

	static appConfig = (app: INestApplication): AppConfig => {
		const configService = app.get(ConfigurationService);

		return configService.app;
	};

	static logAppBoostrap = (app: INestApplication): void => {
		const appConfig = BootstrapHelper.appConfig(app);

		const playgroundUrl = `${appConfig.protocol}://${appConfig.domain}:${appConfig.port}/graphql`;

		Logger.log(
			`🚀 GraphQL Playground ready at ${playgroundUrl}, started in ${process.uptime().toFixed(3)}s`,
			'Bootstrap',
		);
	};
}
