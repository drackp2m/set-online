import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { ConfigurationService } from '../../../common/config/configuration.service';
import { UserEntity } from '../../user/user.entity';
import { UserService } from '../../user/user.service';
import { JsonWebToken } from '../definitions';
import { JwtCookie } from '../definitions/jwt-cookie.enum';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigurationService,
		private readonly userService: UserService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([(req: Request) => req.cookies[JwtCookie.access]]),
			secretOrKey: configService.jwt.secret,
			ignoreExpiration: false,
		} as StrategyOptions);
	}

	async validate(jwt: JsonWebToken): Promise<UserEntity> {
		return await this.userService.getOneBy('uuid', jwt.sub);
	}
}
