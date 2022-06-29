import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ProtectTo } from '../../decorators/protect-to.decorator';
import { RolesEnum } from '../../models/enums/roles.enum';
import { CreateUserInput } from './dtos/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Mutation(() => User, {
		name: 'createUser',
	})
	public async insertOne(
		@Args('input', {
			type: () => CreateUserInput,
		})
		createUserInput: CreateUserInput,
	): Promise<User> {
		return await this.userService.insertOne(createUserInput);
	}

	@ProtectTo(RolesEnum.Registered)
	@Query(() => [User], {
		name: 'getUsers',
	})
	async getMany(): Promise<User[]> {
		const users = await this.userService.getMany();

		pubSub.publish('getAllUsers', { list: users });

		return users;
	}
}
