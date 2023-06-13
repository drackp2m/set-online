import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { ProtectTo } from '../auth/decorators';

import { CreateUserInput, ValidateUserConstraintsInput } from './dtos';
import { UserRole } from './interfaces';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(() => UserEntity)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Mutation(() => UserEntity, {
		name: 'createUser',
	})
	insertOne(
		@Args('input', {
			type: () => CreateUserInput,
		})
		input: CreateUserInput,
	): Promise<UserEntity> {
		return this.userService.insertOne(input);
	}

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
	getMany(): Promise<UserEntity[]> {
		const users = this.userService.getMany();

		pubSub.publish('getAllUsers', { list: users });

		return users;
	}
}
