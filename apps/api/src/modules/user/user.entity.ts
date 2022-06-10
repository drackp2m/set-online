import { Entity, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../../utils/base.entity';

@Entity({ tableName: 'users' })
@ObjectType({ description: 'user ' })
export class User extends BaseEntity<User> {
	@Property({ unique: true })
	@Field()
	username!: string;

	@Property({ unique: true })
	@Field()
	email!: string;

	@Property()
	@Field()
	password!: string;
}
