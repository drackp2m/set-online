import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { JwtConfig } from '../../common/config/jwt.config';
import { User } from '../../user/user.entity';
import { UserService } from '../../user/user.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

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
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: jwtConfig.secret,
			ignoreExpiration: false,
		} as StrategyOptions);
	}

	public async validate(jwt: JwtPayload): Promise<User> {
		return await this.userService.getOneBy('uuid', jwt.sub);
	}
}
