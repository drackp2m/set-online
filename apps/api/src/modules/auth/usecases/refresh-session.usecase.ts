import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UnauthorizedException } from '../../../common/exceptions';
import { UserService } from '../../user/user.service';

import { CreateJwtAccessTokenUsecase } from './create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './create-jwt-refresh-token.usecas';

@Injectable()
export class RefreshSessionUsecase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly createAccessToken: CreateJwtAccessTokenUsecase,
		private readonly createRefreshToken: CreateJwtRefreshTokenUsecase,
		private readonly userService: UserService,
	) {}

	async execute(
		currentRefreshToken: string,
	): Promise<{ accessToken: string; refreshToken: string }> {
		try {
			const refreshTokenPayload = this.jwtService.verify(currentRefreshToken) as { sub: string };

			const user = await this.userService.getOneBy('uuid', refreshTokenPayload.sub);

			const accessToken = this.createAccessToken.execute(user);
			const refreshToken = this.createRefreshToken.execute(user);

			return { accessToken, refreshToken };
		} catch (error) {
			throw new UnauthorizedException(error.message, 'refreshToken');
		}
	}
}
