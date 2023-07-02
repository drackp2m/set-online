import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { JwtCookie } from '../definitions/jwt-cookie.enum';

@Injectable({ scope: Scope.REQUEST })
export class SetJwtTokenUsecase {
	constructor(@Inject(REQUEST) private readonly request: Request) {}

	execute(tokenValue: string, tokenType: JwtCookie): void {
		const path = tokenType === JwtCookie.access ? '/graphql' : '/api/refresh-session';

		// ToDo => add expiration time to cookies
		this.request.res.cookie(tokenType, tokenValue, {
			secure: true,
			httpOnly: true,
			sameSite: true,
			path,
		});
	}
}
