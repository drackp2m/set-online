import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { PubSub } from 'graphql-subscriptions';
import { UserService } from './user.service';

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@Query(() => [User])
	async getAllUsers(): Promise<User[]> {
		const users = await this.userService.findAll();
		pubSub.publish('getAllUsers', { list: users });

		return users;
	}
}
