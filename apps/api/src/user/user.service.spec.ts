import { EntityData } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/postgresql';
import { Test, TestingModule } from '@nestjs/testing';

import { BadRequestException } from '../common/exceptions/bad-request.exception';
import { NotFoundException } from '../common/exceptions/not-found.exception';
import { BcryptService } from '../common/wrappers/bcrypt.service';
import { User } from './user.entity';
import { UserFaker } from './user.faker';
import { UserService } from './user.service';

const uuid = '433b2725-c483-46b2-8b80-1b944158e04c';

jest.mock('uuid', () => ({
	v4: () => uuid,
}));

describe('UserService', () => {
	let service: UserService;
	let entityManager: jest.Mocked<Partial<EntityManager>>;
	let bcryptService: jest.Mocked<Partial<BcryptService>>;

	const password = 'fJnUG@9?a8&a}YO/';
	const date = new Date(Date.UTC(1955, 2, 24));
	const expectedUser: EntityData<User> = {
		uuid,
		username: 'user',
		password,
		createdAt: date,
		updatedAt: date,
	};

	const userFaker = new UserFaker();
	const expectedUsers: EntityData<User>[] = [
		userFaker.make(),
		userFaker.make(),
	];

	beforeAll(async () => {
		jest.useFakeTimers();
		jest.setSystemTime(date);

		entityManager = {
			persistAndFlush: jest.fn(),
			find: jest.fn(),
			findOne: jest.fn(),
		};

		bcryptService = {
			generatePassword: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{ provide: EntityManager, useValue: entityManager },
				{ provide: BcryptService, useValue: bcryptService },
			],
		}).compile();

		service = module.get<UserService>(UserService);
	});

	beforeEach(async () => {
		jest.clearAllMocks();
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('insertOne', () => {
		it('should throw Error when EntityManager.persistAndFlush throw BadRequestException', async () => {
			bcryptService.generatePassword.mockResolvedValueOnce(password);

			entityManager.persistAndFlush.mockRejectedValueOnce(() => {
				throw new Error('duplicated key');
			});

			const user = service.insertOne({
				username: 'user',
				password: 'pass',
			});

			await expect(user).rejects.toThrow(BadRequestException);

			expect(bcryptService.generatePassword).toBeCalledTimes(1);
			expect(bcryptService.generatePassword).toBeCalledWith('pass');

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith(expectedUser);
		});

		it('should return User when EntityManager.persistAndFlush not throw Exception', async () => {
			bcryptService.generatePassword.mockResolvedValueOnce(password);
			entityManager.persistAndFlush.mockResolvedValueOnce();

			const user = await service.insertOne({
				username: 'user',
				password: 'pass',
			});

			expect(user).toEqual(expectedUser);

			expect(bcryptService.generatePassword).toBeCalledTimes(1);
			expect(bcryptService.generatePassword).toBeCalledWith('pass');

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
			expect(entityManager.find).toBeCalledWith(User, {});
		});
	});

	describe('getOneBy', () => {
		it('should throw Exception when EntityManager.findOne return null', async () => {
			entityManager.findOne.mockResolvedValueOnce(null);

			const user = service.getOneBy('username', 'user');

			await expect(user).rejects.toThrow(NotFoundException);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(User, { username: 'user' });
		});

		it('should throw Exception when EntityManager.findOne return null', async () => {
			entityManager.findOne.mockResolvedValueOnce(expectedUser);

			const user = await service.getOneBy('email', 'user@domain.com');

			expect(user).toEqual(expectedUser);

			expect(entityManager.findOne).toBeCalledTimes(1);
			expect(entityManager.findOne).toBeCalledWith(User, {
				email: 'user@domain.com',
			});
		});
	});
});
