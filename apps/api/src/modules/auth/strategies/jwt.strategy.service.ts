import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { JwtConfig } from '../../../config/jwt.config';
import { User } from '../../user/user.entity';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
	public constructor(
		private readonly configService: ConfigService,
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

	public async validate(user: User): Promise<User> {
		return await this.jwtAuthenticate(user);
	}

	private async jwtAuthenticate(user: User): Promise<User> {
		return user;
	}
}
