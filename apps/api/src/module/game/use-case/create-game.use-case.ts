import { Injectable } from '@nestjs/common';

import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { User } from '../../user/user.entity';
import { Game } from '../game.entity';
import { GameRepository } from '../game.repository';
import { GameParticipant } from '../relations/game-participant.entity';
import { GameParticipantRepository } from '../relations/game-participant.repository';

@Injectable()
export class CreateGameUseCase {
	constructor(
		private readonly gameRepository: GameRepository,
		private readonly gameParticipantRepository: GameParticipantRepository,
	) {}

	async execute(participant: User): Promise<Game> {
		try {
			await this.gameRepository.getOne({
				participants: { uuid: participant.uuid },
			});
		} catch (error) {
			const expiresOnDate = new Date();
			expiresOnDate.setDate(expiresOnDate.getDate() + 1);

			const newGame = new Game({
				tableCards: ['a', 'b', 'c'],
				deckCards: ['d', 'e', 'f'],
				expiresOn: expiresOnDate,
			});

			await this.gameParticipantRepository.insert(
				new GameParticipant({
					game: newGame,
					user: participant,
				}),
			);

			newGame.participants.add(participant);

			return newGame;
		}

		throw new PreconditionFailedException('already in a game', 'user');
	}
}
