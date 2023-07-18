import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../user/user.entity';
import { UserService } from '../../user/user.service';
import { RegisterRequestDto } from '../dto/register-request.dto';

@Injectable()
export class RegisterUsecase {
	constructor(private readonly userService: UserService) {}

	async execute(registerRequest: RegisterRequestDto): Promise<UserEntity> {
		return this.userService.insertOne(registerRequest);
	}
}
