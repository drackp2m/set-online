import { AnyEntity, EntityRepository, FilterQuery } from '@mikro-orm/core';

import { NotFoundException } from '../exception/not-found.exception';

export abstract class BaseRepository<T extends AnyEntity<T>> extends EntityRepository<T> {
	// FixMe => try to hide original entityRepository method
	private readonly entityManager = this.getEntityManager();

	async getOne(query: FilterQuery<T>): Promise<T | null> {
		const user = await this.entityManager.findOne(this.entityName, query);

		if (!user) {
			const entityName = this.entityName.toString().replace('Entity', '').toLocaleLowerCase();
			throw new NotFoundException('not exists', entityName);
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
