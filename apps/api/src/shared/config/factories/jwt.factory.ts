import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

import { ConfigurationService } from '../configuration.service';

@Injectable()
export class JwtFactory implements JwtOptionsFactory {
	constructor(private readonly config: ConfigurationService) {}

	createJwtOptions(): JwtModuleOptions {
		return {
			secret: this.config.jwt.secret,
			signOptions: {
				jwtid: this.config.jwt.id,
				algorithm: this.config.jwt.algorithm,
				issuer: this.config.jwt.issuer,
			},
		};
	}
}
