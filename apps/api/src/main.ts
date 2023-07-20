import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';

import { AppModule } from './module/app/app.module';
import { BootstrapHelper } from './shared/util/boostrap.helper';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule, BootstrapHelper.nestApplicationOptions);

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	const appConfig = BootstrapHelper.appConfig(app);

	app.setGlobalPrefix(appConfig.prefix);
	app.useGlobalPipes(BootstrapHelper.validationPipe);
	app.enableCors({ origin: true, credentials: true, methods: 'GET,POST' });
	app.use(cookieParser(appConfig.cookieSecret));

	await app.listen(3000, '0.0.0.0', () => BootstrapHelper.logAppBoostrap(app));
}

bootstrap().catch((e) => Logger.error(e.message, e));
