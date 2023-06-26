import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';

import { BootstrapHelper } from './common/utils/boostrap.helper';
import { AppModule } from './modules/app/app.module';

async function bootstrap(): Promise<void> {
	const app = await NestFactory.create(AppModule, BootstrapHelper.nestApplicationOptions);

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	const appConfig = BootstrapHelper.appConfig(app);

	app.setGlobalPrefix(appConfig.prefix);
	app.useGlobalPipes(BootstrapHelper.validationPipe);
	app.enableCors({ origin: true, credentials: true, methods: 'GET,POST' });
	app.use(cookieParser());

	await app.listen(3000, '0.0.0.0', () => BootstrapHelper.logAppBoostrap(app));
}

bootstrap().catch((e) => Logger.error(e.message, e));
