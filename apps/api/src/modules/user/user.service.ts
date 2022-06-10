import { Injectable } from '@nestjs/common';

import { EntityManager } from '@mikro-orm/postgresql';
import { User } from './user.entity';

@Injectable()
export class UserService {
	constructor(private readonly entityManager: EntityManager) {}

	async findAll(): Promise<User[]> {
		return this.entityManager.find(User, {});
	}

	async create(): Promise<User> {
		const entity = new User({
			username: 'drackp2m',
			email: 'marc@jovani.com',
		});

		return await this.entityManager.persistAndFlush(entity).then(() => entity);
	}
}
