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

const mockUuid = '00000000-0000-4000-0000-000000000000';
const mockPasswordHashed = 'fJnUG@9?a8&a}YO/';

jest.mock('uuid', () => ({
	v4: () => mockUuid,
}));

jest.mock('bcryptjs', () => ({
	genSalt: () => 'randomSalt',
	hash: () => mockPasswordHashed,
}));

describe('UserService', () => {
	let service: UserService;
	let entityManager: jest.Mocked<Partial<EntityManager>>;

	const date = new Date(Date.UTC(1955, 2, 24));
	const expectedMockUser: EntityData<UserEntity> = {
		uuid: mockUuid,
		username: 'user',
		password: mockPasswordHashed,
		createdAt: date,
		updatedAt: date,
	};

	const userFaker = new UserFaker();
	const expectedMockUsers: EntityData<UserEntity>[] = [
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
		it('should throw BadRequestException when EntityManager.persistAndFlush throw BadRequestException', async () => {
			entityManager.persistAndFlush.mockRejectedValueOnce(() => {
				throw new Error('duplicated key');
			});

			const user = service.insertOne({
				username: 'user',
				password: 'pass',
			});

			await expect(user).rejects.toThrow(BadRequestException);

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith(expectedMockUser);
		});

		it('should return User when EntityManager.persistAndFlush not throw Exception', async () => {
			entityManager.persistAndFlush.mockResolvedValueOnce();

			const user = await service.insertOne({
				username: 'user',
				password: 'pass',
			});

			expect(user).toEqual(expectedMockUser);

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith(expectedMockUser);
		});
	});

	describe('getMany', () => {
		it('should return User Array', async () => {
			entityManager.find.mockResolvedValueOnce(expectedMockUsers);

			const users = await service.getMany();

			expect(users).toEqual(expectedMockUsers);

			expect(entityManager.find).toBeCalledTimes(1);
			expect(entityManager.find).toBeCalledWith(UserEntity, {});
		});
	});

	describe('getOneBy', () => {
		it('should throw NotFoundException when EntityManager.findOne return null', async () => {
			entityManager.findOne.mockResolvedValueOnce(null);

			const user = service.getOneBy('username', 'user');

			await expect(user).rejects.toThrow(NotFoundException);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(UserEntity, {
				username: 'user',
			});
		});

		it('should throw UserEntity when EntityManager.findOne return UserEntity', async () => {
			entityManager.findOne.mockResolvedValueOnce(expectedMockUser);

			const user = await service.getOneBy('email', 'user@domain.com');

			expect(user).toEqual(expectedMockUser);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(UserEntity, {
				email: 'user@domain.com',
			});
		});
	});
});
