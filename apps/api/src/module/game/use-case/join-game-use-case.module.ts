import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { Game } from '../game.entity';
import { GameParticipant } from '../relation/game-participant.entity';

import { JoinGameUseCase } from './join-game.use-case';

@Module({
	imports: [MikroOrmModule.forFeature([Game, GameParticipant])],
	providers: [JoinGameUseCase],
	exports: [JoinGameUseCase],
})
export class JoinGameUseCaseModule {}
