import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';

async function bootstrap(): Promise<{
	protocol: string;
	domain: string;
	port: number;
	globalPrefix: string;
}> {
	const app = await NestFactory.create(AppModule);

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

	await app.listen(config.port, '0.0.0.0');

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	return {
		protocol: config.protocol,
		domain: config.domain,
		port: config.port,
		globalPrefix: config.prefix,
	};
}

bootstrap()
	.then(({ protocol, domain, port, globalPrefix }) =>
		Logger.log(
			`🚀 GraphQL Playground ready at ${protocol}://${domain}:${port}${globalPrefix}/graphql, started in ${process
				.uptime()
				.toFixed(2)}s`,
		),
	)
	.catch((e) => Logger.error(e.message, e));
