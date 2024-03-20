import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JsonWebToken } from '../definition/json-web-token.interface';

@Injectable()
export class CheckJwtRefreshTokenUseCase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configurationService: ConfigurationService,
	) {}

	execute(token: string): JsonWebToken {
		return this.jwtService.verify(token, {
			jwtid: this.configurationService.jwt.id,
			audience: `${this.configurationService.jwt.audience}-refresh-token`,
			issuer: this.configurationService.jwt.issuer,
		});
	}
}
