import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { JwtCookie } from '../definition/jwt-cookie.enum';

import { CheckJwtTokenUseCase } from './check-jwt-token.use-case';
import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';
import { CreateJwtRefreshTokenUseCase } from './create-jwt-refresh-token.use-case';
import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

@Injectable({ scope: Scope.REQUEST })
export class RefreshSessionUseCase {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		private readonly checkJwtToken: CheckJwtTokenUseCase,
		private readonly createAccessToken: CreateJwtAccessTokenUseCase,
		private readonly createRefreshToken: CreateJwtRefreshTokenUseCase,
		private readonly setJwtToken: SetJwtTokenUseCase,
	) {}

	async execute(): Promise<void> {
		try {
			const currentRefreshToken = this.request.signedCookies[JwtCookie.refresh];

			const refreshTokenPayload = this.checkJwtToken.execute(currentRefreshToken, 'refresh');

			const accessToken = this.createAccessToken.execute(refreshTokenPayload.sub);
			const refreshToken = this.createRefreshToken.execute(refreshTokenPayload.sub);

			this.setJwtToken.execute(JwtCookie.access, accessToken);
			this.setJwtToken.execute(JwtCookie.refresh, refreshToken);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'unknown error';

			throw new UnauthorizedException(errorMessage, 'refreshToken');
		}
	}
}
