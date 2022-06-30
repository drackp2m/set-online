import { Entity, Enum, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { UserRoleEnum } from '../../models/enums/user-role.enum';
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

	@Enum({ items: () => UserRoleEnum, default: UserRoleEnum.Registered })
	@Field(_type => UserRoleEnum)
	role!: UserRoleEnum;
}
