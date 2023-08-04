import { Test, TestingModule } from '@nestjs/testing';

import { AppModule } from '../app/app.module';
import { AuthModule } from '../auth/auth.module';

import { UserModule } from './user.module';
import { UserRepository } from './user.repository';

describe('UserRepository', () => {
	let userEntityRepository: UserRepository;
	let authModule: jest.Mocked<Partial<AuthModule>>;

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

	it('should be defined', () => {
		expect(userEntityRepository).toBeDefined();
	});

	describe('insertOne', () => {
		it('should insert a user in the test database', async () => {
			const list = await userEntityRepository.getMany();

			expect(list.length).toEqual(0);
		});
	});
});
