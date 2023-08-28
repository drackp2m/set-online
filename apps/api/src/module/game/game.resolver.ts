import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { ProtectTo } from '../auth/decorator/protect-to.decorator';
import { CurrentUser } from '../user/decorator/current-user.decorator';
import { UserRole } from '../user/definition/user-role.enum';
import { User } from '../user/user.entity';

import { JoinGameInput } from './dto/input/join-game.input';
import { Game } from './game.entity';
import { CreateGameUseCase } from './use-case/create-game.use-case';
import { JoinGameUseCase } from './use-case/join-game.use-case';
import { ListGamesUseCase } from './use-case/list-games.use-case';

@Resolver(() => Game)
export class GameResolver {
	constructor(
		private readonly createGameUseCase: CreateGameUseCase,
		private readonly listGamesUseCase: ListGamesUseCase,
		private readonly joinGameUseCase: JoinGameUseCase,
	) {}

	@Query(() => [Game], { name: 'listGames' })
	async listGames(): Promise<Game[]> {
		return this.listGamesUseCase.execute();
	}

	@ProtectTo(UserRole.Registered)
	@Mutation(() => Game, { name: 'joinGame' })
	async joinGame(
		@CurrentUser() user: User,
		@Args('input', { type: () => JoinGameInput })
		input: JoinGameInput,
	): Promise<Game> {
		return this.joinGameUseCase.execute(input.gameUuid, user);
	}

	@ProtectTo(UserRole.Registered)
	@Mutation(() => Game, { name: 'newGame' })
	async newGame(@CurrentUser() user: User): Promise<Game> {
		return this.createGameUseCase.execute(user);
	}
}
