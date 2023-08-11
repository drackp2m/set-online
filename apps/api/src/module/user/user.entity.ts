import { Entity, Enum, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

import { CustomBaseEntity } from '../../shared/util/base.entity';

import { UserRole } from './definition/user-role.enum';
import { UserRepository } from './user.repository';

@Entity({ tableName: 'users', customRepository: () => UserRepository })
@ObjectType({ description: 'user' })
export class UserEntity extends CustomBaseEntity<UserEntity> {
	@Property({ unique: true })
	@Field()
	username!: string;

	@Property()
	password!: string;

	@Property({ unique: true, nullable: true })
	@Field({ nullable: true })
	email?: string;

	@Enum({ items: () => UserRole, default: UserRole.Registered })
	@Field((_type) => UserRole)
	role!: UserRole;
}
