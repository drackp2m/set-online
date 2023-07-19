import { Injectable, Scope } from '@nestjs/common';

import { UnauthorizedException } from '../../../shared/exceptions/unauthorized-exception.exception';
import { CheckPasswordUsecase } from '../../../shared/usecases/check-password.usecase';
import { UserEntityRepository } from '../../user/user.repository';
import { JwtCookie } from '../definition/jwt-cookie.enum';
import { LoginRequestDto } from '../dto/login-request.dto';

import { CreateJwtAccessTokenUsecase } from './create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './create-jwt-refresh-token.usecas';
import { SetJwtTokenUsecase } from './set-jwt-token.usecase';

@Injectable({ scope: Scope.REQUEST })
export class LoginUsecase {
	constructor(
		private readonly userRepository: UserEntityRepository,
		private readonly checkPassword: CheckPasswordUsecase,
		private readonly createAccessToken: CreateJwtAccessTokenUsecase,
		private readonly createRefreshToken: CreateJwtRefreshTokenUsecase,
		private readonly setJwtToken: SetJwtTokenUsecase,
	) {}

	async execute(loginRequest: LoginRequestDto): Promise<void> {
		const user = await this.userRepository.getOne({ username: loginRequest.username });

		if (!(await this.checkPassword.execute(loginRequest.password, user.password))) {
			throw new UnauthorizedException('not match', 'password');
		}

		const accessToken = this.createAccessToken.execute(user.uuid);
		const refreshToken = this.createRefreshToken.execute(user.uuid);

		this.setJwtToken.execute(accessToken, JwtCookie.access);
		this.setJwtToken.execute(refreshToken, JwtCookie.refresh);
	}
}
