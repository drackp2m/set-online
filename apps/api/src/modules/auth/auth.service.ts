import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { compare } from 'bcryptjs';

import { UnauthorizedException } from '../../common/exceptions';
import { UserService } from '../user/user.service';

import { LoginRequestDto } from './dtos';
import { CreateJwtAccessTokenUsecase } from './usecases/create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './usecases/create-jwt-refresh-token.usecas';

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => UserService))
		private readonly userService: UserService,
		private readonly createAccessToken: CreateJwtAccessTokenUsecase,
		private readonly createRefresToken: CreateJwtRefreshTokenUsecase,
	) {}

	async login(input: LoginRequestDto): Promise<{ accessToken: string; refreshToken: string }> {
		const user = await this.userService.getOneBy('username', input.username);

		if (!(await this.passwordMatch(input.password, user.password))) {
			throw new UnauthorizedException('not match', 'password');
		}

		const accessToken = this.createAccessToken.execute(user.uuid);
		const refreshToken = this.createRefresToken.execute(user.uuid);

		return { accessToken, refreshToken };
	}

	private async passwordMatch(password: string, hashedPassword: string): Promise<boolean> {
		return await compare(password, hashedPassword);
	}
}
