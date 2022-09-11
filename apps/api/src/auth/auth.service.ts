import { forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { BaseException } from '../common/exceptions/base.exception';
import { UnauthorizedException } from '../common/exceptions/unauthorized-exception.exception';
import { BcryptService } from '../common/wrappers/bcript.service';
import { UserService } from '../user/user.service';
import { LoginInput } from './dtos/login.input';
import { TokenModel } from './dtos/token.model';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => UserService))
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
		private readonly bcryptService: BcryptService,
	) {}

	async login(input: LoginInput): Promise<TokenModel> {
		const user = await this.userService.getOneBy('username', input.username);

		if (!(await this.comparePassword(input.password, user.password))) {
			throw new UnauthorizedException('not match', 'password');
		}

		const token = this.jwtService.sign({}, { subject: user.uuid });

		return new TokenModel({ token });
	}

	async comparePassword(
		password: string,
		hashedPassword: string,
	): Promise<boolean> {
		return await this.bcryptService.compare(password, hashedPassword);
	}

	getPayloadFromJwt(token: string): JwtPayload {
		const [, payload] = token.split('.');

		if (!payload) {
			throw new BaseException('payload missing', HttpStatus.BAD_REQUEST);
		}

		return JSON.parse(Buffer.from(payload, 'base64url').toString());
	}
}
