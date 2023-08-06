import { EntityManager, EntityRepository, FilterQuery, Primary } from '@mikro-orm/core';

import { NotFoundException } from '../exception/not-found.exception';

import { BaseEntity } from './base.entity';

export class BaseRepository<T extends BaseEntity<T>> {
	protected readonly repository: EntityRepository<T> = new EntityRepository<T>(
		this.entityManager,
		this.entityName,
	);

	constructor(
		private readonly entityManager: EntityManager,
		private readonly entityName: string,
	) {}

	getReference(id: Primary<T>): T {
		return this.repository.getReference(id);
	}

	async getOne(query: FilterQuery<T>): Promise<T | null> {
		const user = await this.repository.findOne(query);

		if (!user) {
			const entityName = this.entityName.toString().replace('Entity', '').toLocaleLowerCase();
			throw new NotFoundException('not exists', entityName);
		}

		return user;
	}

	async getMany(): Promise<T[]> {
		return this.repository.findAll();
	}

	async insert(entity: T): Promise<T> {
		await this.repository.nativeInsert(entity);

		return entity;
	}

	async update(entity: T): Promise<T> {
		await this.repository.upsert(entity);

		return entity;
	}

	async delete(entity: T): Promise<void> {
		await this.repository.nativeDelete(entity);
	}

	async deleteMany(query: FilterQuery<T>): Promise<void> {
		await this.repository.nativeDelete(query);
	}
}
