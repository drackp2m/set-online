import {
	forwardRef,
	Inject,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginInput } from './dtos/login.input';
import { TokenModel } from './dtos/token.model';
import * as bcryptjs from 'bcryptjs';
import { ConfigService } from '@nestjs/config';
import { JwtConfig } from '../../config/jwt.config';
import ms from 'ms';

@Injectable()
export class AuthService {
	private readonly jtwConfig: JwtConfig = this.configService.get<JwtConfig>(
		'jwt',
		{
			infer: true,
		},
	);

	constructor(
		@Inject(forwardRef(() => UserService))
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService,
	) {}

	async login(input: LoginInput): Promise<TokenModel> {
		const user = await this.userService.getOneBy('username', input.username);

		if (!(await this.comparePassword(input.password, user.password))) {
			throw new UnauthorizedException({ password: 'not match' });
		}

		const token = this.jwtService.sign({ uuid: user.uuid });
		const expiresOn = new Date(Date.now() + ms(this.jtwConfig.expiresIn));

		return new TokenModel({ token, expiresOn });
	}

	async encryptPassword(password: string): Promise<string> {
		const salt = await bcryptjs.genSalt();
		return await bcryptjs.hash(password, salt);
	}

	async comparePassword(
		password: string,
		hashedPassword: string,
	): Promise<boolean> {
		return await bcryptjs.compare(password, hashedPassword);
	}
}
