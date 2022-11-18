import { EntityData } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { Test, TestingModule } from '@nestjs/testing';

import {
	BadRequestException,
	NotFoundException,
} from '../../common/exceptions';
import { UserFaker } from './factories';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

const uuid = '433b2725-c483-46b2-8b80-1b944158e04c';
const passwordHashed = 'fJnUG@9?a8&a}YO/';

jest.mock('uuid', () => ({
	v4: () => uuid,
}));

jest.mock('bcryptjs', () => ({
	genSalt: () => 'randomSalt',
	hash: () => passwordHashed,
}));

describe('UserService', () => {
	let service: UserService;
	let entityManager: jest.Mocked<Partial<EntityManager>>;

	const date = new Date(Date.UTC(1955, 2, 24));
	const expectedUser: EntityData<UserEntity> = {
		uuid,
		username: 'user',
		password: passwordHashed,
		createdAt: date,
		updatedAt: date,
	};

	const userFaker = new UserFaker();
	const expectedUsers: EntityData<UserEntity>[] = [
		userFaker.makeOne(),
		userFaker.makeOne(),
	];

	beforeAll(async () => {
		jest.useFakeTimers();
		jest.setSystemTime(date);

		entityManager = {
			persistAndFlush: jest.fn(),
			find: jest.fn(),
			findOne: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{ provide: EntityManager, useValue: entityManager },
			],
		}).compile();

		service = module.get<UserService>(UserService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('insertOne', () => {
		it('should throw Error when EntityManager.persistAndFlush throw BadRequestException', async () => {
			entityManager.persistAndFlush.mockRejectedValueOnce(() => {
				throw new Error('duplicated key');
			});

			const user = service.insertOne({
				username: 'user',
				password: 'pass',
			});

			await expect(user).rejects.toThrow(BadRequestException);

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith(expectedUser);
		});

		it('should return User when EntityManager.persistAndFlush not throw Exception', async () => {
			entityManager.persistAndFlush.mockResolvedValueOnce();

			const user = await service.insertOne({
				username: 'user',
				password: 'pass',
			});

			expect(user).toEqual(expectedUser);

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith(expectedUser);
		});
	});

	describe('getMany', () => {
		it('should return User Array', async () => {
			entityManager.find.mockResolvedValueOnce(expectedUsers);

			const users = await service.getMany();

			expect(users).toEqual(expectedUsers);

			expect(entityManager.find).toBeCalledTimes(1);
			expect(entityManager.find).toBeCalledWith(UserEntity, {});
		});
	});

	describe('getOneBy', () => {
		it('should throw Exception when EntityManager.findOne return null', async () => {
			entityManager.findOne.mockResolvedValueOnce(null);

			const user = service.getOneBy('username', 'user');

			await expect(user).rejects.toThrow(NotFoundException);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(UserEntity, {
				username: 'user',
			});
		});

		it('should throw Exception when EntityManager.findOne return null', async () => {
			entityManager.findOne.mockResolvedValueOnce(expectedUser);

			const user = await service.getOneBy('email', 'user@domain.com');

			expect(user).toEqual(expectedUser);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(UserEntity, {
				email: 'user@domain.com',
			});
		});
	});
});
