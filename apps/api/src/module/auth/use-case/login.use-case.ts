import { Injectable, Scope } from '@nestjs/common';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { CheckPasswordUseCase } from '../../../shared/use-case/check-password.use-case';
import { UserRepository } from '../../user/user.repository';
import { JwtCookie } from '../definition/jwt-cookie.enum';
import { LoginRequestDto } from '../dto/login-request.dto';

import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';
import { CreateJwtRefreshTokenUseCase } from './create-jwt-refresh-token.use-cas';
import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

@Injectable({ scope: Scope.REQUEST })
export class LoginUseCase {
	constructor(
		private readonly userRepository: UserRepository,
		private readonly checkPassword: CheckPasswordUseCase,
		private readonly createAccessToken: CreateJwtAccessTokenUseCase,
		private readonly createRefreshToken: CreateJwtRefreshTokenUseCase,
		private readonly setJwtToken: SetJwtTokenUseCase,
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
