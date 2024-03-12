import { Module } from '@nestjs/common';

import { GameResolver } from './game.resolver';
import { CreateGameUseCaseModule } from './use-case/create-game.use-case.module';
import { JoinGameUseCaseModule } from './use-case/join-game.use-case.module';
import { ListGamesUseCaseModule } from './use-case/list-games.use-case.module';

@Module({
	imports: [CreateGameUseCaseModule, ListGamesUseCaseModule, JoinGameUseCaseModule],
	providers: [GameResolver],
})
export class GameModule {}
