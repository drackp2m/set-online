import { Collection, Entity, Enum, ManyToMany, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

import { CustomBaseEntity } from '../../shared/util/custom-base.entity';
import { Game } from '../game/game.entity';

import { UserRole } from './definition/user-role.enum';
import { UserRepository } from './user.repository';

@Entity({ customRepository: () => UserRepository })
@ObjectType({ description: 'user' })
export class User extends CustomBaseEntity<User> {
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

	@ManyToMany({ entity: () => Game, mappedBy: (game) => game.participants })
	@Field(() => [Game])
	games = new Collection<Game>(this);
}
