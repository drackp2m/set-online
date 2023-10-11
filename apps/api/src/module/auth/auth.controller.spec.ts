import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { User } from '../user/user.entity';

import { AuthController } from './auth.controller';
import { LoginRequestDto } from './dto/login-request.dto';
import { RegisterRequestDto } from './dto/register-request.dto';
import { LoginUseCase } from './use-case/login.use-case';
import { LogoutUseCase } from './use-case/logout.use-case';
import { RefreshSessionUseCase } from './use-case/refresh-session.use-case';
import { RegisterUseCase } from './use-case/register.use-case';

describe('AuthController', () => {
	let authController: AuthController;
	const registerUseCase = mock<RegisterUseCase>();
	const loginUseCase = mock<LoginUseCase>();
	const logoutUseCase = mock<LogoutUseCase>();
	const refreshSessionUseCase = mock<RefreshSessionUseCase>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AuthController],
			providers: [
				{ provide: RegisterUseCase, useValue: registerUseCase },
				{ provide: LoginUseCase, useValue: loginUseCase },
				{ provide: LogoutUseCase, useValue: logoutUseCase },
				{ provide: RefreshSessionUseCase, useValue: refreshSessionUseCase },
			],
		}).compile();

		authController = await module.resolve(AuthController);
	});

	it('should be defined', () => {
		expect(authController).toBeDefined();
	});

	describe('register', () => {
		it('should return User instance', async () => {
			registerUseCase.execute.mockResolvedValueOnce(new User());

			const requestDto: RegisterRequestDto = {
				username: 'drackp2m',
				password: 'password',
			};

			const result = await authController.register(requestDto);

			expect(result).toBeInstanceOf(User);
		});
	});

	describe('login', () => {
		it('should return undefined', async () => {
			const requestDto: LoginRequestDto = {
				username: 'drackp2m',
				password: 'password',
			};

			const result = await authController.login(requestDto);

			expect(result).toStrictEqual(undefined);
		});
	});

	describe('logout', () => {
		it('should return undefined', async () => {
			const result = await authController.logout();

			expect(result).toStrictEqual(undefined);
		});
	});

	describe('refreshSession', () => {
		it('should return undefined', async () => {
			const result = await authController.refreshSession();

			expect(result).toStrictEqual(undefined);
		});
	});
});
