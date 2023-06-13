import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';
import { AppConfig } from './common/config/app.config';
import { readFileSync } from 'fs';

async function bootstrap(): Promise<{
	protocol: string;
	domain: string;
	port: number;
	globalPrefix: string;
}> {
	const httpsOptions = {
		key: readFileSync('certs/set-selfsigned.key'),
		cert: readFileSync('certs/set-selfsigned.crt'),
	};

	const app = await NestFactory.create(AppModule, { httpsOptions });

	const configService = app.get(ConfigService);
	const config: AppConfig = configService.get<AppConfig>('app', {
		infer: true,
	});

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
		}),
	);
	app.setGlobalPrefix(config.prefix);

	await app.listen(3000, '0.0.0.0');

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	return {
		protocol: config.protocol,
		domain: config.domain,
		port: config.port,
		globalPrefix: config.prefix,
	};
}

bootstrap()
	.then(({ protocol, domain, port }) => {
		const playgroundUrl = `${protocol}://${domain}:${port}/graphql`;

		Logger.log(
			`🚀 GraphQL Playground ready at ${playgroundUrl}, started in ${process
				.uptime()
				.toFixed(3)}s`,
			'Bootstrap',
		);
	})
	.catch((e) => Logger.error(e.message, e));
