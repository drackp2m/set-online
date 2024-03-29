import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';

@Injectable()
export class CreateJwtRefreshTokenUseCase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configurationService: ConfigurationService,
	) {}

	execute(userUuid: string): string {
		return this.jwtService.sign(
			{},
			{
				subject: userUuid,
				audience: `${this.configurationService.jwt.audience}-refresh-token`,
				expiresIn: this.configurationService.jwt.refreshTokenExpiresIn,
				notBefore: this.configurationService.jwt.accessTokenExpiresIn,
			},
		);
	}
}
