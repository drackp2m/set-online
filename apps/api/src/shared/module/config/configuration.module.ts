import { Module } from '@nestjs/common';

import { CleanJwtAccessTokenCookieUseCase } from '../../../module/auth/use-case/clean-jwt-access-token-cookie.use-case';
import { ExtractCookiesFromRawHeadersUseCase } from '../../../module/auth/use-case/extract-cookies-from-raw-headers.use-case';

import { ConfigurationService } from './configuration.service';

@Module({
	providers: [
		ConfigurationService,
		ExtractCookiesFromRawHeadersUseCase,
		CleanJwtAccessTokenCookieUseCase,
	],
	exports: [
		ConfigurationService,
		ExtractCookiesFromRawHeadersUseCase,
		CleanJwtAccessTokenCookieUseCase,
	],
})
export class ConfigurationModule {}
