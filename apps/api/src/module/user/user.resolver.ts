import { Inject } from '@nestjs/common';
import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { ProtectTo } from '../auth/decorator/protect-to.decorator';

import { CurrentUser } from './decorator/current-user.decorator';
import { UserRole } from './definition/user-role.enum';
import { ValidateUserConstraintsInput } from './dto/input/validate-user-constraints.input';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Resolver(() => User)
export class UserResolver {
	private interval: NodeJS.Timeout;

	constructor(
		@Inject('PUB_SUB') private readonly pubSub: PubSub,
		private readonly userRepository: UserRepository,
	) {}

	@Query(() => Boolean, {
		name: 'validateUserConstraints',
	})
	validateUserConstraints(
		@Args('input', { type: () => ValidateUserConstraintsInput })
		_input: ValidateUserConstraintsInput,
	): boolean {
		return true;
	}

	@ProtectTo()
	@Query(() => User, {
		name: 'getUserInfo',
	})
	getUserInfo(@CurrentUser() user: User): User {
		return user;
	}

	@ProtectTo(UserRole.Admin)
	@Query(() => [User], {
		name: 'getUsers',
	})
	async getMany(): Promise<User[]> {
		this.pubSub.publish('getManySubscription', 'Hello from getMany');

		const users = await this.userRepository.getMany({}, {});

		return users;
	}

	@Subscription(() => String, {
		nullable: true,
		resolve: (value) => value,
	})
	getManySubscription() {
		clearInterval(this.interval);

		this.interval = setInterval(() => {
			const message = `Hello from event emitter at ${new Date().toISOString()}`;
			this.pubSub.publish('getManySubscription', message);
		}, 5000);

		return this.pubSub.asyncIterator('getManySubscription');
	}
}
