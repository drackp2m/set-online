import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JsonWebToken } from '../definition/json-web-token.interface';

@Injectable()
export class CheckJwtTokenUseCase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configurationService: ConfigurationService,
	) {}

	execute(token: string, type: 'access' | 'refresh'): JsonWebToken {
		return this.jwtService.verify(token, {
			jwtid: this.configurationService.jwt.id,
			audience: `${this.configurationService.jwt.audience}-${type}-token`,
			issuer: this.configurationService.jwt.issuer,
		});
	}
}
