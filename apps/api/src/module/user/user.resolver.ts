import { Inject } from '@nestjs/common';
import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { ProtectTo } from '../auth/decorator/protect-to.decorator';

import { UserRole } from './definition/user-role.enum';
import { ValidateUserConstraintsInput } from './dto/input/validate-user-constraints.input';
import { UserEntity } from './user.entity';
import { UserEntityRepository } from './user.repository';

@Resolver(() => UserEntity)
export class UserResolver {
	constructor(
		private readonly userRepository: UserEntityRepository,
		@Inject('PUB_SUB') private readonly pubSub: PubSub,
	) {}

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
		console.log('getMany');
		this.pubSub.publish('getManySubscription', 'Hello from getMany');

		const users = await this.userRepository.getMany();

		return users;
	}

	@Subscription(() => String, {
		nullable: true,
		resolve: (value) => value,
	})
	getManySubscription() {
		console.log('getManySubscription');

		return this.pubSub.asyncIterator('getManySubscription');
	}
}
