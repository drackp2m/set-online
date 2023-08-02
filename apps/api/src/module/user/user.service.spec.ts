import { EntityData } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { NotFoundException } from '../../shared/exception/not-found.exception';
import { HashPasswordUseCase } from '../../shared/use-case/hash-password.use-case';

import { UserFaker } from './factory/user.faker';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

const mockUuid = '00000000-0000-4000-0000-000000000000';
const mockPasswordHashed = 'fJnUG@9?a8&a}YO/';

jest.mock('uuid', () => ({
	v4: () => mockUuid,
}));

describe.skip('UserService', () => {
	let userEntityRepository: UserRepository;
	let entityManager: jest.Mocked<Partial<EntityManager>>;
	let hashPassword: jest.Mocked<Partial<HashPasswordUseCase>>;

	const date = new Date(Date.UTC(1955, 2, 24));
	const expectedMockUser: EntityData<UserEntity> = {
		uuid: mockUuid,
		username: 'user',
		password: mockPasswordHashed,
		createdAt: date,
		updatedAt: date,
	};

	const userFaker = new UserFaker();
	const expectedMockUsers: EntityData<UserEntity>[] = [userFaker.makeOne(), userFaker.makeOne()];

	beforeAll(async () => {
		jest.useFakeTimers();
		jest.setSystemTime(date);

		entityManager = {
			persistAndFlush: jest.fn(),
			find: jest.fn(),
			findOne: jest.fn(),
		};

		hashPassword = {
			execute: jest.fn().mockResolvedValue(mockPasswordHashed),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserRepository,
				{ provide: EntityManager, useValue: entityManager },
				{ provide: HashPasswordUseCase, useValue: hashPassword },
			],
		}).compile();

		userEntityRepository = module.get<UserRepository>(UserRepository);
	});

	it('should be defined', () => {
		expect(userEntityRepository).toBeDefined();
	});

	describe.skip('insertOne', () => {
		it.skip('should throw BadRequestException when EntityManager.persistAndFlush throw BadRequestException', async () => {
			entityManager.persistAndFlush.mockRejectedValueOnce(() => {
				throw new Error('duplicated key');
			});

			const userEntity = new UserEntity({
				username: 'user',
				password: 'pass',
			});

			const user = await userEntityRepository.insert(userEntity);

			await expect(user).rejects.toThrow(BadRequestException);

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith(expectedMockUser);
		});

		it('should return User when EntityManager.persistAndFlush not throw Exception', async () => {
			entityManager.persistAndFlush.mockResolvedValueOnce();

			const userEntity = new UserEntity({
				username: 'user',
				password: 'pass',
			});

			const user = await userEntityRepository.insert(userEntity);

			expect(user).toEqual(expectedMockUser);

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith(expectedMockUser);
		});
	});

	describe('getMany', () => {
		it('should return User Array', async () => {
			entityManager.find.mockResolvedValueOnce(expectedMockUsers);

			const users = await userEntityRepository.getMany();

			expect(users).toEqual(expectedMockUsers);

			expect(entityManager.find).toBeCalledTimes(1);
			expect(entityManager.find).toBeCalledWith(UserEntity, {});
		});
	});

	describe('getOneBy', () => {
		it('should throw NotFoundException when EntityManager.findOne return null', async () => {
			entityManager.findOne.mockResolvedValueOnce(null);

			const user = userEntityRepository.getOne({ username: 'user' });

			await expect(user).rejects.toThrow(NotFoundException);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(UserEntity, {
				username: 'user',
			});
		});

		it('should throw UserEntity when EntityManager.findOne return UserEntity', async () => {
			entityManager.findOne.mockResolvedValueOnce(expectedMockUser);

			const user = await userEntityRepository.getOne({ email: 'user@domain.com' });

			expect(user).toEqual(expectedMockUser);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(UserEntity, {
				email: 'user@domain.com',
			});
		});
	});
});
