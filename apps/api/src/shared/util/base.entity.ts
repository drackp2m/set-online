import {
	Entity,
	EntityData,
	BaseEntity as MikroBaseEntity,
	PrimaryKey,
	Property,
} from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { GenerateNowDateUsecase } from '../usecase/generate-now-date.usecase';
import { GenerateUuidUsecase } from '../usecase/generate-uuid.usecase';

@Entity({ abstract: true })
@ObjectType()
export abstract class BaseEntity<
	T extends BaseEntity<T>,
	PK extends keyof T = 'uuid',
	P extends string = never,
> extends MikroBaseEntity<T, PK, P> {
	@PrimaryKey()
	@Field((_type) => ID)
	uuid: string = GenerateUuidUsecase.execute();

	@Property()
	@Field((_type) => Date)
	createdAt: Date = GenerateNowDateUsecase.execute();

	@Property({ onUpdate: GenerateNowDateUsecase.execute })
	@Field((_type) => Date)
	updatedAt: Date = GenerateNowDateUsecase.execute();

	constructor(entity?: EntityData<T>) {
		super();

		if (entity) {
			Object.assign(this, entity);
		}
	}
}
