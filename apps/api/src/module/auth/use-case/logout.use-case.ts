import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { getEnumKey } from '../../../shared/util/get-enum-key.util';
import { JwtCookie } from '../definition/jwt-cookie.enum';
import { JwtEndpoints } from '../definition/jwt-endpoints.enum';

@Injectable({ scope: Scope.REQUEST })
export class LogoutUseCase {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		private readonly configService: ConfigurationService,
	) {}

	execute(): void {
		this.clearCookie(JwtCookie.access);
		this.clearCookie(JwtCookie.refresh);
	}

	private clearCookie(tokenType: JwtCookie): void {
		const enumKey = getEnumKey(JwtCookie, tokenType);

		if (enumKey) {
			const path = JwtEndpoints[enumKey];

			this.request.res?.clearCookie(tokenType, {
				signed: true,
				secure: true,
				httpOnly: true,
				sameSite: true,
				path,
				domain: this.configService.api.cookieDomain,
			});
		}
	}
}
