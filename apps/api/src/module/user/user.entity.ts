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
import { GameEntity } from '../game/game.entity';

import { UserRole } from './definition/user-role.enum';
import { UserRepository } from './user.repository';

@Entity({ customRepository: () => UserRepository })
@ObjectType({ description: 'user' })
export class UserEntity extends CustomBaseEntity<UserEntity> {
	[EntityRepositoryType]?: UserRepository;

	@Property({ unique: true })
	@Field()
	username!: string;

	@Property()
	password!: string;

	@Property({ unique: true, nullable: true })
	@Field({ nullable: true })
	email?: string;

	@Enum({ items: () => UserRole, default: UserRole.Registered })
	@Field(() => UserRole)
	role!: UserRole;

	@ManyToMany(() => GameEntity, (game) => game.participants)
	@Field(() => [GameEntity])
	games: Collection<GameEntity> = new Collection<GameEntity>(this);
}
