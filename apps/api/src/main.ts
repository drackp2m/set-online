/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
	const port = process.env['API_PORT'] || 3333;
	const globalPrefix = '';

	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix(globalPrefix);
	await app.listen(port);

	return { port, globalPrefix };
}

bootstrap()
	.then(({ port, globalPrefix }) =>
		Logger.log(
			`🚀 GraphQL Playground ready at http://localhost:${port}${globalPrefix}/graphql, started in ${process.uptime()}s`,
		),
	)
	.catch((e) => Logger.error(e.message, e));
