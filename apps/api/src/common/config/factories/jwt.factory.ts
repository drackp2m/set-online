import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

import { JwtConfig } from '../jwt.config';

@Injectable()
export class JwtFactory implements JwtOptionsFactory {
	constructor(private readonly configService: ConfigService) {}

	createJwtOptions(): JwtModuleOptions {
		const jwtConfig: JwtConfig = this.configService.get<JwtConfig>('jwt', {
			infer: true,
		});

		return {
			secret: jwtConfig.secret,
			signOptions: {
				algorithm: jwtConfig.algorithm,
				issuer: jwtConfig.issuer,
				audience: jwtConfig.issuer,
				jwtid: jwtConfig.id,
				expiresIn: jwtConfig.expiresIn,
				notBefore: 0,
			},
		};
	}
}
