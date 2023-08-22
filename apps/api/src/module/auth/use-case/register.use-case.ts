import { Injectable } from '@nestjs/common';

import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { UserEntity } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { RegisterRequestDto } from '../dto/register-request.dto';

@Injectable()
export class RegisterUseCase {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(registerRequest: RegisterRequestDto): Promise<UserEntity> {
		const userExists = await this.userRepository.getMany({
			$or: [
				{ username: registerRequest.username },
				{
					email: registerRequest.email,
				},
			],
		});

		if (userExists.length > 0) {
			const field = userExists[0].username === registerRequest.username ? 'username' : 'email';

			throw new PreconditionFailedException('already exists', field);
		}

		const user = new UserEntity(registerRequest);

		return this.userRepository.insert(user);
	}
}
