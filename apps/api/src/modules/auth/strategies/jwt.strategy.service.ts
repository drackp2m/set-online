import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import { JwtConfig } from '../../../config/jwt.config';
import { JwtPayloadInterface } from '../../../models/interfaces/jwt-payload.interface';
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
			algorithm: 'HS256',
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: jwtConfig.secret,
			// jsonWebTokenOptions: {
			// 	jwtid: jwtConfig.id,
			// 	algorithms: ['HS256']
			// },
		} as StrategyOptions);
	}

	public async validate(jwt: JwtPayloadInterface): Promise<User> {
		console.log(jwt);
		try {
			return await this.userService.getOneBy('uuid', jwt.sub);
		} catch {
			throw new UnauthorizedException();
		}
	}
}
