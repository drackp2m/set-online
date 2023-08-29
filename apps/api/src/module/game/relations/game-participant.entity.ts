import { Entity, ManyToOne, Property } from '@mikro-orm/core';

import { GenerateNowDateUseCase } from '../../../shared/use-case/generate-now-date.use-case';
import { User } from '../../user/user.entity';
import { Game } from '../game.entity';

import { GameParticipantRepository } from './game-participant.repository';

@Entity({ repository: () => GameParticipantRepository })
export class GameParticipant {
	@ManyToOne({ entity: () => Game, primary: true, onDelete: 'cascade' })
	game: Game;

	@ManyToOne({ entity: () => User, primary: true, onDelete: 'cascade' })
	user: User;

	@Property({ defaultRaw: 'CURRENT_TIMESTAMP' })
	createdAt: Date = GenerateNowDateUseCase.execute();

	constructor(init?: Partial<GameParticipant>) {
		if (init) {
			Object.assign(this, init);
		}
	}
}
