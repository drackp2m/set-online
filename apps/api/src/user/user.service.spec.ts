import { EntityManager } from '@mikro-orm/postgresql';
import { Test, TestingModule } from '@nestjs/testing';

import { BcryptService } from '../common/wrappers/bcript.service';
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

	beforeAll(async () => {
		jest.useFakeTimers();
		jest.setSystemTime(date);

		entityManager = {
			persistAndFlush: jest.fn(),
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

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('insertOne', () => {
		it('should throw Error when EntityManager.persistAndFlush throw Exception', async () => {
			bcryptService.generatePassword.mockResolvedValueOnce(password);

			entityManager.persistAndFlush.mockImplementationOnce(() => {
				throw new Error('duplicated key');
			});

			const user = service.insertOne({
				username: 'user',
				password: 'pass',
			});

			await expect(user).rejects.toThrow(Error);

			expect(bcryptService.generatePassword).toBeCalledTimes(1);
			expect(bcryptService.generatePassword).toBeCalledWith('pass');

			expect(entityManager.persistAndFlush).toBeCalledTimes(1);
			expect(entityManager.persistAndFlush).toBeCalledWith({
				uuid,
				username: 'user',
				password,
				createdAt: date,
				updatedAt: date,
			});
		});
	});
});
