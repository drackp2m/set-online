import { Injectable } from '@nestjs/common';
import { JwtModuleOptions, JwtOptionsFactory } from '@nestjs/jwt';

import { ConfigurationService } from '../configuration.service';

@Injectable()
export class JwtFactory implements JwtOptionsFactory {
	constructor(private readonly configurationService: ConfigurationService) {}

	createJwtOptions(): JwtModuleOptions {
		return {
			secret: this.configurationService.jwt.secret,
			signOptions: {
				jwtid: this.configurationService.jwt.id,
				algorithm: this.configurationService.jwt.algorithm,
				issuer: this.configurationService.jwt.issuer,
			},
		};
	}
}
