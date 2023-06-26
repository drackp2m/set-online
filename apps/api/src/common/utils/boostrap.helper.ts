import { readFileSync } from 'fs';

import { INestApplication, Logger, NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppConfig } from '../config';

export class BootstrapHelper {
	static nestApplicationOptions: NestApplicationOptions = {
		httpsOptions: {
			key: readFileSync('certs/set-selfsigned.key'),
			cert: readFileSync('certs/set-selfsigned.crt'),
		},
	};

	static appConfig = (app: INestApplication): AppConfig => {
		const configService = app.get(ConfigService);

		return configService.get<AppConfig>('app', {
			infer: true,
		});
	};

	static validationPipe = new ValidationPipe({
		whitelist: true,
		transform: true,
	});

	static logAppBoostrap = (app: INestApplication): void => {
		const appConfig = BootstrapHelper.appConfig(app);

		const playgroundUrl = `${appConfig.protocol}://${appConfig.domain}:${appConfig.port}/graphql`;

		Logger.log(
			`🚀 GraphQL Playground ready at ${playgroundUrl}, started in ${process.uptime().toFixed(3)}s`,
			'Bootstrap',
		);
	};
}
