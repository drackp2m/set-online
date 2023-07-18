import {
	Entity,
	EntityData,
	BaseEntity as MikroBaseEntity,
	PrimaryKey,
	Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { v4 } from 'uuid';

import { GetNowDateUsecase } from '../usecases/get-now-date.usecase';

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
	createdAt: Date = GetNowDateUsecase.execute();

	@Property({ onUpdate: GetNowDateUsecase.execute })
	@Field((_type) => Date)
	updatedAt: Date = GetNowDateUsecase.execute();

	constructor(entity?: EntityData<T>) {
		super();

		if (entity) {
			Object.assign(this, entity);
		}
	}
}
