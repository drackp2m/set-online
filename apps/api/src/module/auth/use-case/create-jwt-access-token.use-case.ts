import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';

@Injectable()
export class CreateJwtAccessTokenUseCase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configurationService: ConfigurationService,
	) {}

	execute(userUuid: string): string {
		return this.jwtService.sign(
			{},
			{
				subject: userUuid,
				audience: `${this.configurationService.jwt.audience}-access-token`,
				expiresIn: this.configurationService.jwt.accessTokenExpiresIn,
				notBefore: 0,
			},
		);
	}
}
