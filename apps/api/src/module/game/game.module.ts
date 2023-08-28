import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { Game } from './game.entity';
import { GameResolver } from './game.resolver';
import { GameParticipant } from './relations/game-participant.entity';
import { CreateGameUseCase } from './use-case/create-game.use-case';
import { JoinGameUseCase } from './use-case/join-game.use-case';
import { ListGamesUseCase } from './use-case/list-games.use-case';

@Module({
	imports: [MikroOrmModule.forFeature([Game, GameParticipant])],
	providers: [GameResolver, CreateGameUseCase, ListGamesUseCase, JoinGameUseCase],
	exports: [MikroOrmModule],
})
export class GameModule {}
