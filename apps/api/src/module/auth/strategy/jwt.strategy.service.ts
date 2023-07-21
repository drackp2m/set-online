import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { UserEntity } from '../../user/user.entity';
import { UserEntityRepository } from '../../user/user.repository';
import { JsonWebToken } from '../definition/json-web-token.interface';
import { JwtCookie } from '../definition/jwt-cookie.enum';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigurationService,
		private readonly userRepository: UserEntityRepository,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request) => req.signedCookies?.[JwtCookie.access],
			]),
			secretOrKey: configService.jwt.secret,
			ignoreExpiration: false,
		} as StrategyOptions);
	}

	async validate(jwt: JsonWebToken): Promise<UserEntity> {
		return await this.userRepository.getOne({ uuid: jwt.sub });
	}
}
