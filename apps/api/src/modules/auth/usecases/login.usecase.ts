import { compare } from 'bcryptjs';

import { UnauthorizedException } from '../../../common/exceptions';
import { UserService } from '../../user/user.service';
import { LoginRequestDto } from '../dtos';

import { CreateJwtAccessTokenUsecase } from './create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './create-jwt-refresh-token.usecas';

export class LoginUsecase {
	constructor(
		private readonly userService: UserService,
		private readonly createAccessToken: CreateJwtAccessTokenUsecase,
		private readonly createRefreshToken: CreateJwtRefreshTokenUsecase,
	) {}

	async execute(
		loginRequest: LoginRequestDto,
	): Promise<{ accessToken: string; refreshToken: string }> {
		const user = await this.userService.getOneBy('username', loginRequest.username);

		if (!(await this.passwordMatch(loginRequest.password, user.password))) {
			throw new UnauthorizedException('not match', 'password');
		}

		const accessToken = this.createAccessToken.execute(user.uuid);
		const refreshToken = this.createRefreshToken.execute(user.uuid);

		return { accessToken, refreshToken };
	}

	private async passwordMatch(password: string, hashedPassword: string): Promise<boolean> {
		return await compare(password, hashedPassword);
	}
}
