import { FilterQuery, FindOptions, Primary } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';

import { NotFoundException } from '../exception/not-found.exception';

import { CustomBaseEntity } from './custom-base.entity';

export class CustomEntityRepository<T extends CustomBaseEntity<T>> {
	em = this.entityManager.fork();

	constructor(
		private readonly entityManager: EntityManager,
		private readonly entityName: string,
	) {}

	getReference(id: Primary<T>): T {
		return this.em.getReference(this.entityName, id);
	}

	async getOne<Hint extends string = never>(
		query: FilterQuery<T>,
		options?: FindOptions<T, Hint>,
	): Promise<T | null> {
		const user = await this.em.findOne(this.entityName, query, options);

		if (!user) {
			const entityName = this.em.toString().replace('Entity', '').toLocaleLowerCase();
			throw new NotFoundException('not exists', entityName);
		}

		return user;
	}

	async getMany<Hint extends string = never>(
		query?: FilterQuery<T>,
		options?: FindOptions<T, Hint>,
	): Promise<T[]> {
		return this.em.find(this.entityName, query, options);
	}

	async insert(entity: T): Promise<T> {
		await this.em.persistAndFlush(entity);

		return entity;
	}

	async update(entity: T): Promise<T> {
		await this.em.persistAndFlush(entity);

		return entity;
	}

	async delete(entity: T): Promise<void> {
		await this.em.nativeDelete(this.entityName, { uuid: entity.uuid });
	}

	async deleteMany(query: FilterQuery<T>): Promise<void> {
		await this.em.nativeDelete(this.entityName, query);
	}
}
