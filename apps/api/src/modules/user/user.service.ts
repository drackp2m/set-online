import {
	HttpException,
	HttpStatus,
	Injectable,
	NotFoundException,
} from '@nestjs/common';

import { User } from './user.entity';
import { EntityData } from '@mikro-orm/core/typings';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class UserService {
	constructor(protected readonly entityManager: EntityManager) {}

	async create(entity: User): Promise<User> {
		return this.entityManager.persistAndFlush(entity).then(
			() => entity,
			async (reason) => {
				const toRemove = await this.entityManager.findOne(User, {
					username: entity.username,
				});

				if (toRemove) {
					await this.entityManager.removeAndFlush(toRemove);
				}

				throw new HttpException(reason.detail, HttpStatus.BAD_REQUEST);
			},
		);
	}

	async findAll(): Promise<User[]> {
		return this.entityManager.find(User, {});
	}

	async findOneBy(
		prop: keyof EntityData<User>,
		value: User[keyof EntityData<User>],
	): Promise<User> {
		const entity = await this.entityManager.findOne(User, {
			[prop]: value,
		});

		if (!entity) {
			throw new NotFoundException({ [prop]: 'not found' });
		}

		return entity;
	}
}
