import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { JwtCookie } from '../definition/jwt-cookie.enum';
import { JwtEndpoints } from '../definition/jwt-endpoints.enum';

@Injectable({ scope: Scope.REQUEST })
export class LogoutUsecase {
	constructor(@Inject(REQUEST) private readonly request: Request) {}

	execute(): void {
		this.clearCookie(JwtCookie.access);
		this.clearCookie(JwtCookie.refresh);
	}

	private clearCookie(tokenType: JwtCookie): void {
		const path = JwtEndpoints[tokenType];

		this.request.res.clearCookie(tokenType, {
			secure: true,
			httpOnly: true,
			sameSite: true,
			path,
		});
	}
}