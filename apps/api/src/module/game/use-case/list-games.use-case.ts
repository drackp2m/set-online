import { Injectable } from '@nestjs/common';

import { GameStatus } from '../definition/game-status.enum';
import { GameEntity } from '../game.entity';
import { GameRepository } from '../game.repository';

@Injectable()
export class ListGamesUseCase {
	constructor(private readonly gameRepository: GameRepository) {}

	async execute(): Promise<GameEntity[]> {
		const games = await this.gameRepository.getMany({
			status: GameStatus.WaitingOpponents,
		});

		games.forEach((game) => {
			game.participants.init();
		});

		return games;
	}
}
