import { AnyEntity, EntityData, EntityRepository } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseEntity } from './base.entity';

@Injectable()
export abstract class EntityService<T extends BaseEntity<T>> {
	protected entityRepository: EntityRepository<AnyEntity>;

	constructor(protected readonly entityManager: EntityManager) {
		this.entityRepository = entityManager.getRepository('');
	}

	async fuck(
		prop: keyof EntityData<T>,
		value: T[keyof EntityData<T>],
	): Promise<T> {
		const entity = await this.entityRepository.findOne({
			[prop]: value,
		});

		if (!entity) {
			throw new NotFoundException({ [prop]: 'not found' });
		}

		return entity as T;
	}
}
