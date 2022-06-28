import { Entity, Property } from '@mikro-orm/core';
import { Field, ObjectType } from '@nestjs/graphql';
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
	email: string;
}
