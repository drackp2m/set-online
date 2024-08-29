import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';

import { AppModule } from './module/app/app.module';
import { BootstrapHelper } from './shared/util/bootstrap.helper';

async function bootstrap(): Promise<void> {
	let app = await NestFactory.create(AppModule);

	const appConfig = BootstrapHelper.apiConfig(app);

	const allowedDomains = appConfig.corsAllowedDomains;

	app = await NestFactory.create(AppModule, BootstrapHelper.nestApplicationOptions(appConfig));

	useContainer(app.select(AppModule), { fallbackOnErrors: true });

	app.setGlobalPrefix(appConfig.prefix);
	app.useGlobalPipes(BootstrapHelper.validationPipe);
	app.useGlobalFilters(BootstrapHelper.exceptionsFilter);
	app.enableCors({
		credentials: true,
		origin: (origin, callback) => {
			if (allowedDomains.includes(origin)) {
				callback(null, origin);
			} else {
				callback(new Error(`Domain ${origin} not allowed by CORS`));
			}
		},
		methods: 'GET,POST',
	});
	app.use(cookieParser(appConfig.cookieSecret));

	const port = appConfig.port ?? 3000;

	await app.listen(port, () => BootstrapHelper.logAppBootstrap(appConfig));
}

bootstrap().catch((e) => Logger.error(e.message, e));
