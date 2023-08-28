import { FilterQuery, FindOptions, Primary } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';

import { NotFoundException } from '../../../shared/exception/not-found.exception';

import { GameParticipant } from './game-participant.entity';

export class GameParticipantRepository {
	private readonly em = this.entityManager.fork();

	constructor(
		private readonly entityManager: EntityManager,
		private readonly entityName: string,
	) {}

	getReference(id: Primary<GameParticipant>): GameParticipant {
		return this.em.fork().getReference(this.entityName, id);
	}

	async getOne(query: FilterQuery<GameParticipant>): Promise<GameParticipant | null> {
		const user = await this.em.findOne(this.entityName, query);

		if (!user) {
			const entityName = this.entityName.replace('Entity', '').toLocaleLowerCase();
			throw new NotFoundException('not exists', entityName);
		}

		return user;
	}

	async getMany<Hint extends string = never>(
		query?: FilterQuery<GameParticipant>,
		options?: FindOptions<GameParticipant, Hint>,
	): Promise<GameParticipant[]> {
		return this.em.find(this.entityName, query, options);
	}

	async insert(entity: GameParticipant): Promise<GameParticipant> {
		await this.em.persistAndFlush(entity);

		return entity;
	}

	async update(entity: GameParticipant): Promise<GameParticipant> {
		await this.em.persistAndFlush(entity);

		return entity;
	}

	async delete(entity: GameParticipant): Promise<void> {
		await this.em.nativeDelete(this.entityName, {
			game: entity.game,
			user: entity.user,
		});
	}

	async deleteMany(query: FilterQuery<GameParticipant>): Promise<void> {
		await this.em.nativeDelete(this.entityName, query);
	}
}
