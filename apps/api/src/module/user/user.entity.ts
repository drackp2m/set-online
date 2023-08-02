import { Entity, EntityRepositoryType, Enum, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity } from '../../shared/util/base.entity';

import { UserRole } from './definition/user-role.enum';
import { UserRepository } from './user.repository';

@Entity({ tableName: 'users', customRepository: () => UserRepository })
@ObjectType({ description: 'user' })
export class UserEntity extends BaseEntity<UserEntity> {
	[EntityRepositoryType]: UserRepository;

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
