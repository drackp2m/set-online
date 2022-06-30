import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { JwtConfig } from '../../../config/jwt.config';
import { JwtInterface } from '../../../models/interfaces/jwt.interface';
import { User } from '../../user/user.entity';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
	public constructor(
		private readonly configService: ConfigService,
		private readonly userService: UserService,
	) {
		const jwtConfig: JwtConfig = configService.get<JwtConfig>('jwt', {
			infer: true,
		});

		super({
			algorithms: [jwtConfig.algorithm],
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: jwtConfig.secret,
			jsonWebTokenOptions: { jwtid: jwtConfig.id },
		} as StrategyOptions);
	}

	public async validate(jwt: JwtInterface): Promise<User> {
		try {
			return await this.userService.getOneBy('uuid', jwt.uuid);
		} catch {
			throw new UnauthorizedException();
		}
	}
}
