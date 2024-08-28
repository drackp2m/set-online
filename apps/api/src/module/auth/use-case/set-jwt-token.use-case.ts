import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { getEnumKey } from '../../../shared/util/get-enum-key.util';
import { JwtCookie } from '../definition/jwt-cookie.enum';
import { JwtEndpoints } from '../definition/jwt-endpoints.enum';

@Injectable({ scope: Scope.REQUEST })
export class SetJwtTokenUseCase {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		private readonly configService: ConfigurationService,
	) {}

	execute(tokenType: JwtCookie, tokenValue: string): void {
		const enumKey = getEnumKey(JwtCookie, tokenType);

		if (enumKey) {
			const path = JwtEndpoints[enumKey];

			// ToDo => add expiration time to cookies
			this.request.res?.cookie(tokenType, tokenValue, {
				signed: true,
				secure: true,
				httpOnly: true,
				sameSite: 'none',
				domain: this.configService.api.cookieDomain,
				expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
				path,
			});
		}
	}
}
