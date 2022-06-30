import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ProtectTo } from '../../decorators/protect-to.decorator';
import { UserRoleEnum } from '../../models/enums/user-role.enum';
import { CreateUserInput } from './dtos/create-user.input';
import { ValidateUserConstraintsInput } from './dtos/validate-user-constraints.input';
import { User } from './user.entity';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Mutation(() => User, {
		name: 'createUser',
	})
	insertOne(
		@Args('input', {
			type: () => CreateUserInput,
		})
		input: CreateUserInput,
	): Promise<User> {
		return this.userService.insertOne(input);
	}

	@Mutation(() => Boolean, {
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

	@ProtectTo(UserRoleEnum.Registered)
	@Query(() => [User], {
		name: 'getUsers',
	})
	getMany(): Promise<User[]> {
		const users = this.userService.getMany();

		pubSub.publish('getAllUsers', { list: users });

		return users;
	}
}
