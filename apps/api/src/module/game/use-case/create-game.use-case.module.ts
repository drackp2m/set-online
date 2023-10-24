import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { ShuffleArrayUseCase } from '../../../shared/use-case/shuffle-array.use-case';
import { Game } from '../game.entity';
import { GameParticipant } from '../relations/game-participant.entity';

import { CreateGameUseCase } from './create-game.use-case';
import { GenerateGameCardsUseCase } from './generate-game-cards.use-case';

@Module({
	imports: [MikroOrmModule.forFeature([Game, GameParticipant])],
	providers: [CreateGameUseCase, GenerateGameCardsUseCase, ShuffleArrayUseCase],
	exports: [CreateGameUseCase],
})
export class CreateGameUseCaseModule {}
