import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { JwtConfig } from '../../../common/config';
import { UserEntity } from '../../user/user.entity';
import { UserService } from '../../user/user.service';
import { JwtPayload } from '../interfaces';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		private readonly userService: UserService,
	) {
		const jwtConfig: JwtConfig = configService.get<JwtConfig>('jwt', {
			infer: true,
		});

		super({
			jwtFromRequest: ExtractJwt.fromExtractors([(req: Request) => req.cookies['jwt-token']]),
			secretOrKey: jwtConfig.secret,
			ignoreExpiration: false,
		} as StrategyOptions);
	}

	async validate(jwt: JwtPayload): Promise<UserEntity> {
		return await this.userService.getOneBy('uuid', jwt.sub);
	}
}
