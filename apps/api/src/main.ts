/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

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

	app.setGlobalPrefix(config.prefix);
	await app.listen(config.port);

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
			`🚀 GraphQL Playground ready at ${protocol}://${domain}:${port}${globalPrefix}/graphql, started in ${process.uptime()}s`,
		),
	)
	.catch((e) => Logger.error(e.message, e));
