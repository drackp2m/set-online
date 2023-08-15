import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { getEnumKey } from '../../../shared/util/get-enum-key.util';
import { JwtCookie } from '../definition/jwt-cookie.enum';
import { JwtEndpoints } from '../definition/jwt-endpoints.enum';

@Injectable({ scope: Scope.REQUEST })
export class SetJwtTokenUseCase {
	constructor(@Inject(REQUEST) private readonly request: Request) {}

	execute(tokenType: JwtCookie, tokenValue: string): void {
		const path = JwtEndpoints[getEnumKey(JwtCookie, tokenType)];

		// ToDo => add expiration time to cookies
		this.request.res.cookie(tokenType, tokenValue, {
			signed: true,
			secure: true,
			httpOnly: true,
			sameSite: true,
			path,
			domain: 'localhost',
		});

		if (JwtCookie.access === tokenType) {
			this.request.res.cookie(tokenType, tokenValue, {
				signed: true,
				secure: true,
				httpOnly: true,
				sameSite: true,
				path: '/api',
				domain: 'localhost',
			});
		}
	}
}
