import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigurationService } from '../../../common/config/configuration.service';
import { UserEntity } from '../../user/user.entity';

@Injectable()
export class CreateJwtRefreshTokenUsecase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configurationService: ConfigurationService,
	) {}

	execute(user: UserEntity): string {
		return this.jwtService.sign(
			{},
			{
				subject: user.uuid,
				audience: `${this.configurationService.jwt.audience}-refresh-token`,
				expiresIn: this.configurationService.jwt.refreshTokenExpiresIn,
				notBefore: this.configurationService.jwt.accessTokenExpiresIn,
			},
		);
	}
}
