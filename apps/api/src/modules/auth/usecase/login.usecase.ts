import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { compare } from 'bcryptjs';
import { Request } from 'express';

import { UnauthorizedException } from '../../../shared/exceptions/unauthorized-exception.exception';
import { UserService } from '../../user/user.service';
import { JwtCookie } from '../definition/jwt-cookie.enum';
import { LoginRequestDto } from '../dto/login-request.dto';

import { CreateJwtAccessTokenUsecase } from './create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './create-jwt-refresh-token.usecas';
import { SetJwtTokenUsecase } from './set-jwt-token.usecase';

@Injectable({ scope: Scope.REQUEST })
export class LoginUsecase {
	constructor(
		@Inject(REQUEST) private readonly request: Request,
		private readonly userService: UserService,
		private readonly createAccessToken: CreateJwtAccessTokenUsecase,
		private readonly createRefreshToken: CreateJwtRefreshTokenUsecase,
		private readonly setJwtToken: SetJwtTokenUsecase,
	) {}

	async execute(loginRequest: LoginRequestDto): Promise<void> {
		const user = await this.userService.getOneBy('username', loginRequest.username);

		if (!(await this.passwordMatch(loginRequest.password, user.password))) {
			throw new UnauthorizedException('not match', 'password');
		}

		const accessToken = this.createAccessToken.execute(user.uuid);
		const refreshToken = this.createRefreshToken.execute(user.uuid);

		this.setJwtToken.execute(accessToken, JwtCookie.access);
		this.setJwtToken.execute(refreshToken, JwtCookie.refresh);

		// this.request.res.status(HttpStatus.NO_CONTENT).send();

		// return;
	}

	private async passwordMatch(password: string, hashedPassword: string): Promise<boolean> {
		return await compare(password, hashedPassword);
	}
}
