import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ProtectTo } from '../auth/decorator/protect-to.decorator';
import { CurrentUser } from '../user/decorator/current-user.decorator';
import { UserRole } from '../user/definition/user-role.enum';
import { UserEntity } from '../user/user.entity';

import { JoinGameInput } from './dto/input/join-game.input';
import { GameEntity } from './game.entity';
import { CreateGameUseCase } from './use-case/create-game.use-case';
import { JoinGameUseCase } from './use-case/join-game.use-case';
import { ListGamesUseCase } from './use-case/list-games.use-case';

@Resolver(() => GameEntity)
export class GameResolver {
	constructor(
		private readonly createGameUseCase: CreateGameUseCase,
		private readonly listGamesUseCase: ListGamesUseCase,
		private readonly joinGameUseCase: JoinGameUseCase,
	) {}

	@Query(() => [GameEntity], { name: 'listGames' })
	async listGames(): Promise<GameEntity[]> {
		return this.listGamesUseCase.execute();
	}

	@ProtectTo(UserRole.Registered)
	@Mutation(() => GameEntity, { name: 'joinGame' })
	async joinGame(
		@CurrentUser() user: UserEntity,
		@Args('input', { type: () => JoinGameInput })
		input: JoinGameInput,
	): Promise<GameEntity> {
		return this.joinGameUseCase.execute(input.gameUuid, user);
	}

	@ProtectTo(UserRole.Registered)
	@Mutation(() => GameEntity, { name: 'newGame' })
	async newGame(@CurrentUser() user: UserEntity): Promise<GameEntity> {
		return this.createGameUseCase.execute(user);
	}
}
