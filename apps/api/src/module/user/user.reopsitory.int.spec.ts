import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { NotFoundException } from '../../shared/exception/not-found.exception';
import { AppModule } from '../app/app.module';
import { AuthModule } from '../auth/auth.module';

import { UserEntity } from './user.entity';
import { UserModule } from './user.module';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
	let userEntityRepository: UserRepository;

	const authModule = mock<AuthModule>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [AppModule, UserModule],
			providers: [
				UserRepository,
				{
					provide: AuthModule,
					useValue: authModule,
				},
			],
		}).compile();

		userEntityRepository = module.get<UserRepository>(UserRepository);
	});

	beforeEach(async () => {
		await userEntityRepository.deleteMany({});
	});

	it('should be defined', () => {
		expect(1).toEqual(1);
	});

	describe('getOne', () => {
		it('should throw exception when user not exists', async () => {
			const searchedUser = userEntityRepository.getOne({ username: 'drackp2m' });

			await expect(searchedUser).rejects.toThrow(NotFoundException);
		});

		it('should return a user when user exists', async () => {
			await userEntityRepository.insert(
				new UserEntity({
					username: 'drackp2m',
					password: 'password',
				}),
			);

			const searchedUser = await userEntityRepository.getOne({ username: 'drackp2m' });

			expect(searchedUser.username).toEqual('drackp2m');
		});
	});

	describe('insertOne', () => {
		it('should insert a user in the test database', async () => {
			const insertedUser = await userEntityRepository.insert(
				new UserEntity({
					username: 'drackp2m',
					password: 'password',
				}),
			);

			const list = await userEntityRepository.getMany();

			expect(list.length).toEqual(1);
			expect(insertedUser.username).toEqual('drackp2m');
		});
	});
});
