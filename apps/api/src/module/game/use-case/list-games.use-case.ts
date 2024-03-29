import { Injectable } from '@nestjs/common';

import { GameStatus } from '../definition/game-status.enum';
import { Game } from '../game.entity';
import { GameRepository } from '../game.repository';

@Injectable()
export class ListGamesUseCase {
	constructor(private readonly gameRepository: GameRepository) {}

	async execute(): Promise<Game[]> {
		return await this.gameRepository.getMany(
			{
				status: GameStatus.WaitingOpponents,
			},
			{ populate: ['participants'] },
		);
	}
}
