import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { UserFaker } from '../../user/factory/user.faker';
import { UserEntity } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { RegisterRequestDto } from '../dto/register-request.dto';

import { RegisterUseCase } from './register.use-case';

describe('RegisterUseCase', () => {
	let useCase: RegisterUseCase;
	const userEntityRepository = mock<UserRepository>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [RegisterUseCase, { provide: UserRepository, useValue: userEntityRepository }],
		}).compile();

		useCase = await module.resolve<RegisterUseCase>(RegisterUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('throw Exception when UserService.insert throw exception', async () => {
			userEntityRepository.insert.mockRejectedValueOnce(new Error('database error'));

			const registerRequest: RegisterRequestDto = {
				username: 'drackp2m',
				password: 'password',
			};

			const user = useCase.execute(registerRequest);

			await expect(user).rejects.toThrow(Error);
		});
	});

	it('should return user', async () => {
		const fakeUser = new UserFaker().makeOne();

		userEntityRepository.insert.mockResolvedValueOnce(fakeUser);

		const registerRequest: RegisterRequestDto = {
			username: fakeUser.username,
			password: fakeUser.password,
		};

		const user = await useCase.execute(registerRequest);

		expect(user).toBeInstanceOf(UserEntity);
	});
});
