import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { PubSub } from 'graphql-subscriptions';
import { UserService } from './user.service';
import { ProtectTo } from '../../decorators/protect-to.decorator';
import { RolesEnum } from '../../models/enums/roles.enum';

const pubSub = new PubSub();

@Resolver(() => User)
export class UserResolver {
	constructor(private readonly userService: UserService) {}

	@ProtectTo(RolesEnum.Registered)
	@Query(() => [User])
	async getAllUsers(): Promise<User[]> {
		const users = await this.userService.findAll();

		pubSub.publish('getAllUsers', { list: users });

		return users;
	}
}
