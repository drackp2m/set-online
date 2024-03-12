import { Injectable } from '@nestjs/common';

import { InternalServerErrorException } from '../../../shared/exception/internal-server-error.exception';
import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { User } from '../../user/user.entity';
import { GameStatus } from '../definition/game-status.enum';
import { Game } from '../game.entity';
import { GameRepository } from '../game.repository';
import { GameParticipant } from '../relations/game-participant.entity';
import { GameParticipantRepository } from '../relations/game-participant.repository';

@Injectable()
export class JoinGameUseCase {
	constructor(
		private readonly gameRepository: GameRepository,
		private readonly gameParticipantRepository: GameParticipantRepository,
	) {}

	async execute(gameUuid: string, participant: User): Promise<Game> {
		const currentGame = this.gameRepository.getOne({
			participants: { uuid: participant.uuid },
			status: { $in: [GameStatus.WaitingOpponents, GameStatus.InProgress] },
		});

		const targetGame = this.gameRepository.getOne({
			uuid: gameUuid,
		});

		return Promise.allSettled([currentGame, targetGame]).then(async ([currentGame, targetGame]) => {
			if ('fulfilled' === currentGame.status) {
				throw new PreconditionFailedException('already in a game', 'user');
			}

			if ('rejected' === targetGame.status) {
				throw targetGame.reason;
			}

			const gameParticipant = new GameParticipant({ game: targetGame.value, user: participant });

			try {
				const { game } = await this.gameParticipantRepository.insert(gameParticipant);

				return game;
			} catch (error) {
				console.log(error);

				throw new InternalServerErrorException(error.message);
			}
		});
	}
}
