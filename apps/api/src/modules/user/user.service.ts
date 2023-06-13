import { EntityData } from '@mikro-orm/core/typings';
import { EntityManager } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcryptjs';

import { BadRequestException, NotFoundException } from '../../common/exceptions';

import { CreateUserInput } from './dtos';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
	constructor(private readonly entityManager: EntityManager) {}

	async insertOne(input: CreateUserInput): Promise<UserEntity> {
		input.password = await this.encryptPassword(input.password);
		const entity = new UserEntity(input);

		return this.entityManager.persistAndFlush(entity).then(
			() => entity,
			async (reason) => {
				console.log(reason);
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

	private async encryptPassword(password: string): Promise<string> {
		const salt = await genSalt(12);

		return hash(password, salt);
	}
}
