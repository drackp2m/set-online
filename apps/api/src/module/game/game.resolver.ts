import { Mutation, Resolver } from '@nestjs/graphql';

import { ProtectTo } from '../auth/decorator/protect-to.decorator';
import { CurrentUser } from '../user/decorator/current-user.decorator';
import { UserRole } from '../user/definition/user-role.enum';
import { UserEntity } from '../user/user.entity';

import { GameEntity } from './game.entity';
import { CreateGameUseCase } from './use-case/create-game.use-case';

@Resolver(() => GameEntity)
export class GameResolver {
	constructor(private readonly createGame: CreateGameUseCase) {}

	@ProtectTo(UserRole.Registered)
	@Mutation(() => GameEntity, { name: 'newGame' })
	async newGame(@CurrentUser() user: UserEntity): Promise<GameEntity> {
		return this.createGame.execute(user);
	}
}
