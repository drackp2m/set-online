import { BaseEntity, Entity, EntityData, PrimaryKey, Property } from '@mikro-orm/core';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { GenerateNowDateUseCase } from '../use-case/generate-now-date.use-case';
import { GenerateUuidUseCase } from '../use-case/generate-uuid.use-case';

@Entity({ abstract: true })
@ObjectType()
export abstract class CustomBaseEntity<
	T extends CustomBaseEntity<T>,
	PK extends keyof T = 'uuid',
	P extends string = never,
> extends BaseEntity<T, PK, P> {
	@PrimaryKey()
	@Field(() => ID)
	uuid: string = GenerateUuidUseCase.execute();

	@Property()
	@Field(() => Date)
	createdAt: Date = GenerateNowDateUseCase.execute();

	@Property({ onUpdate: GenerateNowDateUseCase.execute })
	@Field(() => Date)
	updatedAt: Date = GenerateNowDateUseCase.execute();

	constructor(entity?: EntityData<T>) {
		super();

		if (entity) {
			Object.assign(this, entity);
		}
	}
}
