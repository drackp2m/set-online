import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';

import { UnauthorizedException } from '../common/exceptions/unauthorized-exception.exception';
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
	) {}

	async login(input: LoginInput): Promise<TokenModel> {
		const user = await this.userService.getOneBy('username', input.username);

		if (!(await this.comparePassword(input.password, user.password))) {
			throw new UnauthorizedException('not match', 'password');
		}

		const token = this.jwtService.sign({}, { subject: user.uuid });

		return new TokenModel({ token });
	}

	async encryptPassword(password: string): Promise<string> {
		const salt = await bcryptjs.genSalt(12);

		return await bcryptjs.hash(password, salt);
	}

	async comparePassword(
		password: string,
		hashedPassword: string,
	): Promise<boolean> {
		return await bcryptjs.compare(password, hashedPassword);
	}

	private decodeHeaderAndPayload(token: string): JwtPayload {
		const [, payload] = token.split('.');

		return JSON.parse(Buffer.from(payload, 'base64url').toString());
	}
}
