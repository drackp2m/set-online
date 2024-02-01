import { Collection, Entity, Enum, ManyToMany, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

import { CustomBaseEntity } from '../../shared/util/custom-base.entity';
import { User } from '../user/user.entity';

import { GameStatus } from './definition/game-status.enum';
import { GameRepository } from './game.repository';
import { GameParticipant } from './relations/game-participant.entity';

@Entity({ repository: () => GameRepository })
@ObjectType({ description: 'game' })
export class Game extends CustomBaseEntity<Game> {
	@Property()
	@Field(() => [String])
	tableCards!: string[];

	@Property()
	deckCards!: string[];

	@Enum({ items: () => GameStatus })
	@Field(() => GameStatus)
	status = GameStatus.WaitingOpponents;

	@Property()
	@Field(() => Date)
	expiresOn!: Date;

	@ManyToMany({ entity: () => User, pivotEntity: () => GameParticipant })
	@Field(() => [User])
	participants = new Collection<User>(this);
}
