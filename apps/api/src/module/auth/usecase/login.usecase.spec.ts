import { REQUEST } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { CheckPasswordUsecase } from '../../../shared/usecase/check-password.usecase';
import { UserFaker } from '../../user/factory/user.faker';
import { UserEntityRepository } from '../../user/user.repository';

import { CreateJwtAccessTokenUsecase } from './create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './create-jwt-refresh-token.usecas';
import { LoginUsecase } from './login.usecase';
import { SetJwtTokenUsecase } from './set-jwt-token.usecase';

const mockUuid = '00000000-0000-4000-0000-000000000000';

describe('LoginUsecase', () => {
	let usecase: LoginUsecase;
	let request: jest.Mocked<Partial<Request>>;
	let userEntityRepository: jest.Mocked<Partial<UserEntityRepository>>;
	let checkPassword: jest.Mocked<Partial<CheckPasswordUsecase>>;
	let createAccessToken: jest.Mocked<Partial<CreateJwtAccessTokenUsecase>>;
	let createRefreshToken: jest.Mocked<Partial<CreateJwtRefreshTokenUsecase>>;
	let setToken: jest.Mocked<Partial<SetJwtTokenUsecase>>;

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
				LoginUsecase,
				{ provide: REQUEST, useValue: request },
				{ provide: UserEntityRepository, useValue: userEntityRepository },
				{ provide: CheckPasswordUsecase, useValue: checkPassword },
				{ provide: CreateJwtAccessTokenUsecase, useValue: createAccessToken },
				{ provide: CreateJwtRefreshTokenUsecase, useValue: createRefreshToken },
				{ provide: SetJwtTokenUsecase, useValue: setToken },
			],
		}).compile();

		usecase = await module.resolve<LoginUsecase>(LoginUsecase);
	});

	it('should be defined', () => {
		expect(usecase).toBeDefined();
	});

	describe('execute', () => {
		it('should throw NotFoundException when UserService.getOne throw exception', async () => {
			userEntityRepository.getOne.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = usecase.execute({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'user' });
		});

		it('should throw UnauthorizedException when BcryptService.compare return False', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(mockUser);
			checkPassword.execute.mockResolvedValueOnce(false);

			const tokenModel = usecase.execute({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);

			expect(userEntityRepository.getOne).toBeCalledTimes(1);
			expect(userEntityRepository.getOne).toBeCalledWith({ username: 'user' });
		});

		it('should return TokenModel when JwtService.sign return a token', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(mockUser);
			checkPassword.execute.mockResolvedValueOnce(true);
			createAccessToken.execute.mockReturnValueOnce(mockJwtAccessToken);
			createRefreshToken.execute.mockReturnValueOnce(mockJwtRefreshToken);

			const result = await usecase.execute({
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
