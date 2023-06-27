import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { jwtConfig } from '../../../common/config/registers';
import { UserEntity } from '../../user/user.entity';

@Injectable()
export class CreateJwtTokenUsecase {
	constructor(private readonly jwtService: JwtService) {}

	execute(user: UserEntity): string {
		return this.jwtService.sign({}, { subject: user.uuid, expiresIn: jwtConfig().tokenExpiresIn });
	}
}
