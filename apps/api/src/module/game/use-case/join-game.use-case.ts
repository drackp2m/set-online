import { Injectable } from '@nestjs/common';

import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { UserEntity } from '../../user/user.entity';
import { GameEntity } from '../game.entity';
import { GameRepository } from '../game.repository';

@Injectable()
export class JoinGameUseCase {
	constructor(private readonly gameRepository: GameRepository) {}

	async execute(gameUuid: string, participant: UserEntity): Promise<GameEntity> {
		const currentGame = this.gameRepository.getOne({
			participants: { uuid: participant.uuid },
		});

		const targetGame = this.gameRepository.getOne({
			uuid: gameUuid,
		});

		return Promise.allSettled([currentGame, targetGame]).then(([currentGame, targetGame]) => {
			if ('fulfilled' === currentGame.status) {
				throw new PreconditionFailedException('already in a game', 'user');
			}

			if ('rejected' === targetGame.status) {
				throw targetGame.reason;
			}

			const entity = targetGame.value;

			entity.participants.add(participant);

			return this.gameRepository.update(entity);
		});
	}
}
