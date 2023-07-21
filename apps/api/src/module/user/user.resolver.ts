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
	private interval: NodeJS.Timer;

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
		this.pubSub.publish('getManySubscription', 'Hello from getMany');

		const users = await this.userRepository.getMany();

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

		return {
			async *[Symbol.asyncIterator]() {
				while (true) {
					await new Promise((resolve) => setTimeout(resolve, 1000));
					const message = `Hello from event emitter at ${new Date().toISOString()}`;
					yield message;
				}
			},
		};
	}
}
