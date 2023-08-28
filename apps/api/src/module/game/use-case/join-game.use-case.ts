import { Injectable } from '@nestjs/common';

import { InternalServerErrorException } from '../../../shared/exception/internal-server-error.exception';
import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { User } from '../../user/user.entity';
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

			try {
				await this.gameParticipantRepository.insert(
					new GameParticipant({
						game: targetGame.value,
						user: participant,
					}),
				);

				targetGame.value.participants.add(participant);

				return targetGame.value;
			} catch (error) {
				throw new InternalServerErrorException(error.message);
			}
		});
	}
}
