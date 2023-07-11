import {
	Entity,
	EntityData,
	BaseEntity as MikroBaseEntity,
	PrimaryKey,
	Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { v4 } from 'uuid';

@Entity({ abstract: true })
@ObjectType()
export abstract class BaseEntity<
	T extends BaseEntity<T>,
	PK extends keyof T = 'uuid',
	P extends string = never,
> extends MikroBaseEntity<T, PK, P> {
	@PrimaryKey()
	@Field((_type) => ID)
	uuid: string = v4();

	@Property()
	@Field((_type) => Date)
	createdAt: Date = new Date();

	@Property({ onUpdate: () => new Date() })
	@Field((_type) => Date)
	updatedAt: Date = new Date();

	constructor(entity?: EntityData<T>) {
		super();

		if (entity) {
			Object.assign(this, entity);
		}
	}
}
