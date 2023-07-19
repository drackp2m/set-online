import { AnyEntity, FilterQuery } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/postgresql';

import { NotFoundException } from '../exceptions/not-found.exception';

export abstract class BaseRepository<T extends AnyEntity<T>> extends EntityRepository<T> {
	private readonly entityManager = this.getEntityManager();

	async getOne(query: FilterQuery<T>): Promise<T | null> {
		const user = await this.entityManager.findOne(this.entityName, query);

		if (!user) {
			throw new NotFoundException('user not exists');
		}

		return user;
	}

	async getMany(): Promise<T[]> {
		return this.findAll();
	}

	async insert(entity: T): Promise<T> {
		await this.entityManager.insert(entity);

		return entity;
	}

	async update(entity: T): Promise<T> {
		await this.upsert(entity);

		return entity;
	}

	async delete(entity: T): Promise<void> {
		await this.delete(entity);
	}
}
