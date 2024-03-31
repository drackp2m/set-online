import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';

import { AppModule } from './module/app/app.module';
import { BootstrapHelper } from './shared/util/bootstrap.helper';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule, BootstrapHelper.nestApplicationOptions);

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	const appConfig = BootstrapHelper.appConfig(app);

	app.setGlobalPrefix(appConfig.prefix);
	app.useGlobalPipes(BootstrapHelper.validationPipe);
	app.useGlobalFilters(BootstrapHelper.exceptionsFilter);
	app.enableCors({ credentials: true, origin: true, methods: 'GET,POST' });
	app.use(cookieParser(appConfig.cookieSecret));

	const port = appConfig.port ?? 3000;

	await app.listen(port, '0.0.0.0', () => BootstrapHelper.logAppBootstrap(app));
}

bootstrap().catch((e) => Logger.error(e.message, e));
