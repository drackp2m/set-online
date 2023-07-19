import { Args, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { ProtectTo } from '../auth/decorator/protect-to.decorator';

import { UserRole } from './definition/user-role.enum';
import { ValidateUserConstraintsInput } from './dto/input/validate-user-constraints.input';
import { UserEntity } from './user.entity';
import { UserEntityRepository } from './user.repository';

const pubSub = new PubSub();

@Resolver(() => UserEntity)
export class UserResolver {
	constructor(private readonly userRepository: UserEntityRepository) {}

	@Query(() => Boolean, {
		name: 'validateUserConstraints',
	})
	validateUserConstraints(
		@Args('input', {
			type: () => ValidateUserConstraintsInput,
		})
		_input: ValidateUserConstraintsInput,
	): boolean {
		return true;
	}

	@ProtectTo(UserRole.Admin)
	@Query(() => [UserEntity], {
		name: 'getUsers',
	})
	async getMany(): Promise<UserEntity[]> {
		const users = await this.userRepository.getMany();

		pubSub.publish('getAllUsers', { users });

		return users;
	}
}
