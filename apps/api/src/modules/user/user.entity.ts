import { Entity, Enum, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { EUserRole } from '../../models/enums/user-role.enum';
import { BaseEntity } from '../../utils/base.entity';

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

	@Enum({ items: () => EUserRole, default: EUserRole.Registered })
	@Field(_type => EUserRole)
	role!: EUserRole;
}
