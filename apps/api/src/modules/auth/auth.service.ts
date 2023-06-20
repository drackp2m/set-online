import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

import { UnauthorizedException } from '../../common/exceptions';
import { UserService } from '../user/user.service';

import { LoginInput, TokenModel } from './dtos';

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => UserService))
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {}

	async login(input: LoginInput): Promise<TokenModel> {
		const user = await this.userService.getOneBy('username', input.username);

		if (!(await this.passwordMatch(input.password, user.password))) {
			throw new UnauthorizedException('not match', 'password');
		}

		const token = this.jwtService.sign({}, { subject: user.uuid });

		return new TokenModel({ token });
	}

	private async passwordMatch(password: string, hashedPassword: string): Promise<boolean> {
		return await compare(password, hashedPassword);
	}
}
