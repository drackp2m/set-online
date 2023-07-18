import { EntityData } from '@mikro-orm/core/typings';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

import { BadRequestException } from '../../shared/exceptions/bad-request.exception';
import { NotFoundException } from '../../shared/exceptions/not-found.exception';
import { HashPasswordUsecase } from '../../shared/usecases/hash-password.usecase';
import { RegisterRequestDto } from '../auth/dto/register-request.dto';

import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
	constructor(
		private readonly entityManager: EntityManager,
		private readonly hashPassword: HashPasswordUsecase,
	) {}

	async insertOne(input: RegisterRequestDto): Promise<UserEntity> {
		input.password = await this.hashPassword.execute(input.password);
		const entity = new UserEntity(input);

		return this.entityManager.persistAndFlush(entity).then(
			() => entity,
			async (reason) => {
				throw new BadRequestException(reason.detail);
			},
		);
	}

	async getMany(): Promise<UserEntity[]> {
		return this.entityManager.find(UserEntity, {});
	}

	async getOneBy(
		prop: keyof EntityData<UserEntity>,
		value: UserEntity[keyof EntityData<UserEntity>],
	): Promise<UserEntity> {
		const entity = await this.entityManager.findOne(UserEntity, {
			[prop]: value,
		});

		if (!entity) {
			throw new NotFoundException('not found', prop);
		}

		return entity;
	}
}
