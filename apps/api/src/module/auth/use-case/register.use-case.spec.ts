import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { PreconditionFailedException } from '../../../shared/exception/precondition-failed.exception';
import { GenerateNowDateUseCase } from '../../../shared/use-case/generate-now-date.use-case';
import { GenerateUuidUseCase } from '../../../shared/use-case/generate-uuid.use-case';
import { HashPasswordUseCase } from '../../../shared/use-case/hash-password.use-case';
import { UserFaker } from '../../user/factory/user.faker';
import { UserEntity } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { RegisterRequestDto } from '../dto/register-request.dto';

import { RegisterUseCase } from './register.use-case';

describe('RegisterUseCase', () => {
	let useCase: RegisterUseCase;
	const userEntityRepository = mock<UserRepository>();
	const hashPasswordUseCase = mock<HashPasswordUseCase>();

	jest
		.spyOn(GenerateUuidUseCase, 'execute')
		.mockReturnValue('9aae5da0-82d1-4580-8b4d-c7ab52f09cc0');

	jest.spyOn(GenerateNowDateUseCase, 'execute').mockReturnValue(new Date());

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				RegisterUseCase,
				{ provide: UserRepository, useValue: userEntityRepository },
				{ provide: HashPasswordUseCase, useValue: hashPasswordUseCase },
			],
		}).compile();

		useCase = await module.resolve<RegisterUseCase>(RegisterUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('throw PreconditionFailedException when UserService.getMany return user with same username', async () => {
			const fakeUser = new UserFaker().makeOne();

			userEntityRepository.getMany.mockResolvedValueOnce([fakeUser]);

			const registerRequest: RegisterRequestDto = {
				username: fakeUser.username,
				password: 'password',
			};

			const user = useCase.execute(registerRequest);

			expect(user).rejects.toThrow(PreconditionFailedException);
			expect(user).rejects.toMatchObject({ response: { username: 'already exists' } });
		});

		it('throw PreconditionFailedException when UserService.getMany return user with same email', async () => {
			const fakeUser = new UserFaker().makeOne();

			userEntityRepository.getMany.mockResolvedValueOnce([fakeUser]);

			const registerRequest: RegisterRequestDto = {
				username: 'drackp2m',
				password: 'password',
				email: fakeUser.email,
			};

			const user = useCase.execute(registerRequest);

			expect(user).rejects.toThrow(PreconditionFailedException);
			expect(user).rejects.toMatchObject({ response: { email: 'already exists' } });
		});

		it('throw Exception when UserService.insert throw exception', async () => {
			userEntityRepository.getMany.mockResolvedValueOnce([]);
			userEntityRepository.insert.mockRejectedValueOnce(new Error('database error'));

			const registerRequest: RegisterRequestDto = {
				username: 'drackp2m',
				password: 'password',
			};

			const user = useCase.execute(registerRequest);

			expect(user).rejects.toThrow(Error);
			expect(user).rejects.toMatchObject({});
		});

		it('should return user', async () => {
			const fakeUser = new UserFaker().makeOne();

			userEntityRepository.getMany.mockResolvedValueOnce([]);
			userEntityRepository.insert.mockResolvedValueOnce(
				new UserEntity({
					...fakeUser,
					password: 'H4$h3d_p@$$w0rd',
				}),
			);

			hashPasswordUseCase.execute.mockResolvedValueOnce(fakeUser.password);

			const registerRequest: RegisterRequestDto = {
				username: fakeUser.username,
				password: fakeUser.password,
			};

			const user = await useCase.execute(registerRequest);

			expect(user).toBeInstanceOf(UserEntity);

			expect(userEntityRepository.insert).toBeCalledTimes(1);
			expect(userEntityRepository.insert).toBeCalledWith(
				new UserEntity({
					...registerRequest,
					password: fakeUser.password,
				}),
			);
		});
	});
});
