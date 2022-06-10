import {
	BaseEntity as MikroBaseEntity,
	Entity,
	PrimaryKey,
	Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { v4 } from 'uuid';

@Entity({ abstract: true })
@ObjectType()
export abstract class BaseEntity<
	T extends { uuid: string },
	PK extends keyof T = 'uuid',
	P extends string = never,
> extends MikroBaseEntity<T, PK, P> {
	@PrimaryKey()
	@Field(() => ID)
	uuid: string = v4();

	@Property()
	@Field()
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	@Field()
	updatedAt: Date = new Date();

	constructor(entity: Partial<T>) {
		super();
		Object.assign(this, entity);
	}
}
