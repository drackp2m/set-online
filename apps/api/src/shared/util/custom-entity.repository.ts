import { EntityManager, FilterQuery, Primary } from '@mikro-orm/core';

import { NotFoundException } from '../exception/not-found.exception';

import { CustomBaseEntity } from './base.entity';

export class CustomEntityRepository<T extends CustomBaseEntity<T>> {
	constructor(
		private readonly entityManager: EntityManager,
		private readonly entityName: string,
	) {}

	getReference(id: Primary<T>): T {
		return this.entityManager.getReference(this.entityName, id);
	}

	async getOne(query: FilterQuery<T>): Promise<T | null> {
		const user = await this.entityManager.findOne(this.entityName, query);

		if (!user) {
			const entityName = this.entityName.toString().replace('Entity', '').toLocaleLowerCase();
			throw new NotFoundException('not exists', entityName);
		}

		return user;
	}

	async getMany(query?: FilterQuery<T>): Promise<T[]> {
		return this.entityManager.find(this.entityName, query);
	}

	async insert(entity: T): Promise<T> {
		await this.entityManager.persistAndFlush(entity);

		return entity;
	}

	async update(entity: T): Promise<T> {
		await this.entityManager.upsert(entity);

		return entity;
	}

	async delete(entity: T): Promise<void> {
		await this.entityManager.nativeDelete(this.entityName, { uuid: entity.uuid });
	}

	async deleteMany(query: FilterQuery<T>): Promise<void> {
		await this.entityManager.nativeDelete(this.entityName, query);
	}
}
