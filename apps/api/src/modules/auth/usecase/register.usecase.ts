import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../user/user.entity';
import { UserEntityRepository } from '../../user/user.repository';
import { RegisterRequestDto } from '../dto/register-request.dto';

@Injectable()
export class RegisterUsecase {
	constructor(private readonly userRepository: UserEntityRepository) {}

	async execute(registerRequest: RegisterRequestDto): Promise<UserEntity> {
		const user = new UserEntity(registerRequest);

		return this.userRepository.insert(user);
	}
}
