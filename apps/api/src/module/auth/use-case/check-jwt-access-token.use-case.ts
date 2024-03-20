import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';

@Injectable()
export class CheckJwtAccessTokenUseCase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configurationService: ConfigurationService,
	) {}

	execute(token: string): boolean {
		const check = this.jwtService.verify(token, {
			jwtid: this.configurationService.jwt.id,
			audience: `${this.configurationService.jwt.audience}-access-token`,
			issuer: this.configurationService.jwt.issuer,
		});

		console.log({ check });

		return true;
	}
}
