import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ConfigurationService } from '../../../common/config/configuration.service';
import { UserEntity } from '../../user/user.entity';

@Injectable()
export class CreateJwtAccessTokenUsecase {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configurationService: ConfigurationService,
	) {}

	execute(user: UserEntity): string {
		return this.jwtService.sign(
			{},
			{
				subject: user.uuid,
				audience: `${this.configurationService.jwt.audience}-access-token`,
				expiresIn: this.configurationService.jwt.accessTokenExpiresIn,
				notBefore: 0,
			},
		);
	}
}
