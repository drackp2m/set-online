import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { JsonWebToken } from '../definition/json-web-token.interface';
import { JwtCookie } from '../definition/jwt-cookie.enum';

import { CreateJwtAccessTokenUsecase } from './create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './create-jwt-refresh-token.usecas';
import { SetJwtTokenUsecase } from './set-jwt-token.usecase';

@Injectable({ scope: Scope.REQUEST })
export class RefreshSessionUsecase {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		private readonly jwtService: JwtService,
		private readonly createAccessToken: CreateJwtAccessTokenUsecase,
		private readonly createRefreshToken: CreateJwtRefreshTokenUsecase,
		private readonly setJwtToken: SetJwtTokenUsecase,
	) {}

	async execute(): Promise<void> {
		try {
			const currentRefreshToken = this.request.signedCookies[JwtCookie.refresh];

			const refreshTokenPayload = this.jwtService.verify(currentRefreshToken) as JsonWebToken;

			const accessToken = this.createAccessToken.execute(refreshTokenPayload.sub);
			const refreshToken = this.createRefreshToken.execute(refreshTokenPayload.sub);

			this.setJwtToken.execute(accessToken, JwtCookie.access);
			this.setJwtToken.execute(refreshToken, JwtCookie.refresh);
		} catch (error) {
			throw new UnauthorizedException(error.message, 'refreshToken');
		}
	}
}
