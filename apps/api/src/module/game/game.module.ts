import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { GameEntity } from './game.entity';
import { GameResolver } from './game.resolver';
import { CreateGameUseCase } from './use-case/create-game.use-case';
import { ListGamesUseCase } from './use-case/list-games.use-case';

@Module({
	imports: [MikroOrmModule.forFeature([GameEntity])],
	providers: [GameResolver, CreateGameUseCase, ListGamesUseCase],
	exports: [MikroOrmModule],
})
export class GameModule {}
