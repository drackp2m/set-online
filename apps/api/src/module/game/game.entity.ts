import {
	Collection,
	Entity,
	EntityRepositoryType,
	Enum,
	ManyToMany,
	Property,
} from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

import { CustomBaseEntity } from '../../shared/util/base.entity';
import { UserEntity } from '../user/user.entity';

import { GameStatus } from './definition/game-status.enum';
import { GameRepository } from './game.repository';

@Entity({ tableName: 'games', customRepository: () => GameRepository })
@ObjectType({ description: 'games' })
export class GameEntity extends CustomBaseEntity<GameEntity> {
	[EntityRepositoryType]?: GameEntity;

	@Property()
	@Field((_type) => [String])
	tableCards!: string[];

	@Property()
	deckCards!: string[];

	@Enum({ items: () => GameStatus, default: GameStatus.WaitingOpponents })
	@Field(() => GameStatus)
	status!: GameStatus;

	@Property()
	@Field((_type) => Date)
	expiresOn!: Date;

	@ManyToMany(() => UserEntity, 'games', {
		owner: true,
		joinColumn: 'game_uuid',
		inverseJoinColumn: 'user_uuid',
	})
	@Field((_type) => [UserEntity])
	participants: Collection<UserEntity> = new Collection<UserEntity>(this);
}
