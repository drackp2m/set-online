import {
	BadRequestException,
	forwardRef,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';

import { EntityData } from '@mikro-orm/core/typings';
import { EntityManager } from '@mikro-orm/postgresql';
import { CreateUserInput } from './dtos/create-user.input';
import { User } from './user.entity';
import { AuthService } from '../auth/auth.service';

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
			throw new NotFoundException({ [prop]: 'not found' });
		}

		return entity;
	}
}
