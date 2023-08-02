import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { RegisterRequestDto } from '../dto/register-request.dto';

@Injectable()
export class RegisterUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(registerRequest: RegisterRequestDto): Promise<UserEntity> {
		const user = new UserEntity(registerRequest);

		return this.userRepository.insert(user);
	}
}
