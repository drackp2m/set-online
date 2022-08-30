import { Entity, Enum, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';

import { BaseEntity } from '../common/utils/base.entity';
import { UserRole } from './interfaces/user-role.enum';

@Entity({ tableName: 'users' })
@ObjectType({ description: 'user ' })
export class User extends BaseEntity<User> {
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
