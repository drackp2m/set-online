import { EntityData } from '@mikro-orm/core/typings';
import { EntityManager } from '@mikro-orm/postgresql';
import { forwardRef, Inject, Injectable } from '@nestjs/common';

import { AuthService } from '../auth/auth.service';
import { BadRequestException } from '../common/exceptions/bad-request.exception';
import { NotFoundException } from '../common/exceptions/not-found.exception';
import { CreateUserInput } from './dtos/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
	constructor(
		@Inject(forwardRef(() => AuthService))
		private readonly authService: AuthService,
		protected readonly entityManager: EntityManager,
	) {}

	async insertOne(input: CreateUserInput): Promise<User> {
		input.password = await this.authService.encryptPassword(input.password);
		const entity = new User(input);

		return await this.entityManager.persistAndFlush(entity).then(
			() => entity,
			async (reason) => {
				throw new BadRequestException(reason.detail);
			},
		);
	}

	async getMany(): Promise<User[]> {
		return this.entityManager.find(User, {});
	}

	async getOneBy(
		prop: keyof EntityData<User>,
		value: User[keyof EntityData<User>],
	): Promise<User> {
		const entity = await this.entityManager.findOne(User, {
			[prop]: value,
		});

		if (!entity) {
			throw new NotFoundException('not found', prop);
		}

		return entity as User;
	}
}
