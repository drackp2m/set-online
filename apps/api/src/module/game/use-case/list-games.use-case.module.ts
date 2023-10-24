import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { Game } from '../game.entity';

import { ListGamesUseCase } from './list-games.use-case';

@Module({
	imports: [MikroOrmModule.forFeature([Game])],
	providers: [ListGamesUseCase],
	exports: [ListGamesUseCase],
})
export class ListGamesUseCaseModule {}
