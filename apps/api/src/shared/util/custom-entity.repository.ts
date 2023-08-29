import { FilterQuery, FindOptions, Primary } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';

import { NotFoundException } from '../exception/not-found.exception';

import { CustomBaseEntity } from './custom-base.entity';

export class CustomEntityRepository<T extends CustomBaseEntity<T>> {
	constructor(
		private readonly entityManager: EntityManager,
		private readonly entityName: string,
	) {}

	getReference(id: Primary<T>): T {
		return this.entityManager.fork().getReference(this.entityName, id);
	}

	async getOne<Hint extends string = never>(
		query: FilterQuery<T>,
		options?: FindOptions<T, Hint>,
	): Promise<T | null> {
		const user = await this.entityManager.fork().findOne(this.entityName, query, options);

		if (!user) {
			const entityName = this.entityName.replace('Entity', '').toLocaleLowerCase();
			throw new NotFoundException('not exists', entityName);
		}

		return user;
	}

	async getMany<Hint extends string = never>(
		query?: FilterQuery<T>,
		options?: FindOptions<T, Hint>,
	): Promise<T[]> {
		return this.entityManager.fork().find(this.entityName, query, options);
	}

	async insert(entity: T): Promise<T> {
		await this.entityManager.fork().persistAndFlush(entity);

		return entity;
	}

	async update(entity: T): Promise<T> {
		await this.entityManager.fork().persistAndFlush(entity);

		return entity;
	}

	async delete(entity: T): Promise<void> {
		await this.entityManager.fork().removeAndFlush(entity);
	}

	async deleteMany(query: FilterQuery<T>): Promise<void> {
		await this.entityManager.fork().nativeDelete(this.entityName, query);
	}
}
