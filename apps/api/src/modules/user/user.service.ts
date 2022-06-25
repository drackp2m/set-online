import {
	HttpCode,
	HttpException,
	HttpStatus,
	Injectable,
} from '@nestjs/common';

import { EntityManager } from '@mikro-orm/postgresql';
import { User } from './user.entity';

@Injectable()
export class UserService {
	constructor(private readonly entityManager: EntityManager) {}

	async findAll(): Promise<User[]> {
		// await this.create(
		// 	new User({
		// 		username: 'drackp2m2',
		// 		email: 'marc2@bit2me.com',
		// 		password: '1234',
		// 	}),
		// );

		return this.entityManager.find(User, {});
	}

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
}
