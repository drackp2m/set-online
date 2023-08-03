import { REQUEST } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { CheckPasswordUseCase } from '../../../shared/use-case/check-password.use-case';
import { UserFaker } from '../../user/factory/user.faker';
import { UserRepository } from '../../user/user.repository';

import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';
import { CreateJwtRefreshTokenUseCase } from './create-jwt-refresh-token.use-case';
import { LoginUseCase } from './login.use-case';
import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

const mockUuid = '00000000-0000-4000-0000-000000000000';

describe('LoginUseCase', () => {
	let useCase: LoginUseCase;
	let request: jest.Mocked<Partial<Request>>;
	let userEntityRepository: jest.Mocked<Partial<UserRepository>>;
	let checkPassword: jest.Mocked<Partial<CheckPasswordUseCase>>;
	let createAccessToken: jest.Mocked<Partial<CreateJwtAccessTokenUseCase>>;
	let createRefreshToken: jest.Mocked<Partial<CreateJwtRefreshTokenUseCase>>;
	let setToken: jest.Mocked<Partial<SetJwtTokenUseCase>>;

	const userFaker = new UserFaker();
	const mockUser = userFaker.makeOne({ uuid: mockUuid }, { createdFrom: '2010' });
	const mockJwtAccessToken =
		'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODc5MDQ1NDYsIm5iZiI6MTY4NzkwNDU0NiwiZXhwIjoxNjg3OTA0NjA2LCJhdWQiOiJzZXQtb25saW5lLWFjY2Vzcy10b2tlbiIsImlzcyI6InNldC1vbmxpbmUiLCJzdWIiOiI3ZGNlNmEzNC05N2U3LTRlODMtOWFkMy00M2EzMjdiOGI2ZjEiLCJqdGkiOiJ1dWlkZ2VuIn0.1wFBRxXLrkpJCBnD4GyvsxgFLTAAFVEIuxb3925Sz7ksUG8rhz0IsXfQ1VX6-4c-1pgu1aDa3Mlp4yGbTraebA';
	const mockJwtRefreshToken =
		'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODc5MDQ1NDYsIm5iZiI6MTY4NzkwNDYwNiwiZXhwIjoxNjg5MjAwNTQ2LCJhdWQiOiJzZXQtb25saW5lLXJlZnJlc2gtdG9rZW4iLCJpc3MiOiJzZXQtb25saW5lIiwic3ViIjoiN2RjZTZhMzQtOTdlNy00ZTgzLTlhZDMtNDNhMzI3YjhiNmYxIiwianRpIjoidXVpZGdlbiJ9.Ri1I8tWENO8RhV45ySdlTiSEwBlDXstIvObhi15RqkR9QS8BotRTKzzYrPuEDtbKx60dtr-S5dNNZJRpGSje5g';

	beforeAll(async () => {
		request = {
			res: {
				cookie: jest.fn(),
				status: () => ({
					send: jest.fn(),
				}),
			} as unknown as Request['res'],
		};

		userEntityRepository = {
			getOne: jest.fn(),
		};

		checkPassword = {
			execute: jest.fn(),
		};

		createAccessToken = {
			execute: jest.fn(),
		};

		createRefreshToken = {
			execute: jest.fn(),
		};

		setToken = {
			execute: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LoginUseCase,
				{ provide: REQUEST, useValue: request },
				{ provide: UserRepository, useValue: userEntityRepository },
				{ provide: CheckPasswordUseCase, useValue: checkPassword },
				{ provide: CreateJwtAccessTokenUseCase, useValue: createAccessToken },
				{ provide: CreateJwtRefreshTokenUseCase, useValue: createRefreshToken },
				{ provide: SetJwtTokenUseCase, useValue: setToken },
			],
		}).compile();

		useCase = await module.resolve<LoginUseCase>(LoginUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should throw NotFoundException when UserService.getOne throw exception', async () => {
			userEntityRepository.getOne.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = useCase.execute({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'user' });
		});

		it('should throw UnauthorizedException when BcryptService.compare return False', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(mockUser);
			checkPassword.execute.mockResolvedValueOnce(false);

			const tokenModel = useCase.execute({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'user' });
		});

		it('should return TokenModel when JwtService.sign return a token', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(mockUser);
			checkPassword.execute.mockResolvedValueOnce(true);
			createAccessToken.execute.mockReturnValueOnce(mockJwtAccessToken);
			createRefreshToken.execute.mockReturnValueOnce(mockJwtRefreshToken);

			const result = await useCase.execute({
				username: 'user',
				password: 'pass',
			});

			expect(result).toStrictEqual(undefined);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'user' });

			expect(createAccessToken.execute).toBeCalledTimes(1);
			expect(createAccessToken.execute).toBeCalledWith(mockUuid);
		});
	});
});
