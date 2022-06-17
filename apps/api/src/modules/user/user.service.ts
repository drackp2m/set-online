import { Injectable } from '@nestjs/common';

import { EntityManager } from '@mikro-orm/postgresql';
import { User } from './user.entity';

@Injectable()
export class UserService {
	constructor(private readonly entityManager: EntityManager) {}

	async findAll(): Promise<User[]> {
    // this.create();
		return this.entityManager.find(User, {});
	}

	async create(): Promise<User> {
		const entity = new User({
			username: 'drackp2m',
      email: 'marc@bit2me.com',
      password: '1234'
		});

		return await this.entityManager.persistAndFlush(entity).then(() => entity);
	}
}
