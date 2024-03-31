import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { Context } from 'graphql-ws';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { GraphqlWsConnectionExtraInterface } from '../../../shared/interface/graphql-ws-connection-extra.interface';
import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { User } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { JsonWebToken } from '../definition/json-web-token.interface';
import { JwtCookie } from '../definition/jwt-cookie.enum';

type ExtraContext = Context<Record<string, unknown>, GraphqlWsConnectionExtraInterface>;

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy) {
	constructor(
		private readonly configurationService: ConfigurationService,
		private readonly userRepository: UserRepository,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request | ExtraContext) => {
					console.log('se ejecuta el jwtFromRequest');

					if ((req as ExtraContext).extra) {
						const rawHeaders = (req as ExtraContext).extra.request.rawHeaders;

						const headers: Map<string, string> = new Map();
						for (let i = 0; i < rawHeaders.length; i += 2) {
							const key = rawHeaders[i];
							const value = rawHeaders[i + 1];

							headers.set(key, value);
						}

						// console.log({ headers });

						if (headers.has('Cookie')) {
							const accessTokenParts = headers
								.get('Cookie')
								?.toString()
								.split(';')
								.reduce((obj, item) => {
									const [key, value] = item.trim().split('=');
									obj.set(key, value);

									return obj;
								}, new Map())
								.get(JwtCookie.access)
								.replace('s%3A', '')
								.split('.');

							accessTokenParts?.pop();

							const accessToken = accessTokenParts?.join('.');

							// console.log({ accessToken });

							return accessToken;
						}

						return '';
					} else {
						return (req as Request).signedCookies?.[JwtCookie.access];
					}
				},
			]),
			secretOrKey: configurationService.jwt.secret,
			ignoreExpiration: false,
		} as StrategyOptions);
	}

	async validate(jwt: JsonWebToken): Promise<User> {
		return await this.userRepository.getOne({ uuid: jwt.sub });
	}
}
