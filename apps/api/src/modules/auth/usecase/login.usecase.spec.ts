import { REQUEST } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import bcrypt from 'bcryptjs';
import { Request } from 'express';

import { NotFoundException } from '../../../shared/exceptions/not-found.exception';
import { UnauthorizedException } from '../../../shared/exceptions/unauthorized-exception.exception';
import { UserFaker } from '../../user/factory/user.faker';
import { UserService } from '../../user/user.service';

import { CreateJwtAccessTokenUsecase } from './create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './create-jwt-refresh-token.usecas';
import { LoginUsecase } from './login.usecase';
import { SetJwtTokenUsecase } from './set-jwt-token.usecase';

const mockUuid = '00000000-0000-4000-0000-000000000000';

describe('LoginUsecase', () => {
	let usecase: LoginUsecase;
	let request: jest.Mocked<Partial<Request>>;
	let userService: jest.Mocked<Partial<UserService>>;
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

		userService = {
			getOneBy: jest.fn(),
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
				{ provide: UserService, useValue: userService },
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

	describe('login', () => {
		it('should throw NotFoundException when UserService.getOneBy throw exception', async () => {
			userService.getOneBy.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const tokenModel = usecase.execute({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(NotFoundException);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');
		});

		it('should throw UnauthorizedException when BcryptService.compare return False', async () => {
			userService.getOneBy.mockResolvedValueOnce(mockUser);
			jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(false as never);

			const tokenModel = usecase.execute({ username: 'user', password: 'pass' });

			await expect(tokenModel).rejects.toThrow(UnauthorizedException);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');
		});

		it('should return TokenModel when JwtService.sign return a token', async () => {
			userService.getOneBy.mockResolvedValueOnce(mockUser);
			jest.spyOn(bcrypt, 'compare').mockResolvedValueOnce(true as never);
			createAccessToken.execute.mockReturnValueOnce(mockJwtAccessToken);
			createRefreshToken.execute.mockReturnValueOnce(mockJwtRefreshToken);

			const result = await usecase.execute({
				username: 'user',
				password: 'pass',
			});

			expect(result).toStrictEqual(undefined);

			expect(userService.getOneBy).toBeCalledTimes(1);
			expect(userService.getOneBy).toBeCalledWith('username', 'user');

			expect(createAccessToken.execute).toBeCalledTimes(1);
			expect(createAccessToken.execute).toBeCalledWith(mockUuid);
		});
	});
});
