import { REQUEST } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { mock } from 'jest-mock-extended';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JwtFactory } from '../../../shared/module/config/factories/jwt.factory';

import { CheckJwtTokenUseCase } from './check-jwt-token.use-case';
import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';
import { CreateJwtRefreshTokenUseCase } from './create-jwt-refresh-token.use-case';
import { RefreshSessionUseCase } from './refresh-session.use-case';
import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

describe('RefreshSessionUseCase', () => {
	// ToDo => create jwtFakerFactory;
	const fakeRefreshToken =
		'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTIwNTcyNDgsIm5iZiI6MTY5MjA1NzI0OCwiZXhwIjo0ODE2MjU5NjQ4LCJhdWQiOiJ0ZXN0LXJ1bm5lci1yZWZyZXNoLXRva2VuIiwiaXNzIjoidGVzdCIsInN1YiI6InVzZXItdXVpZCIsImp0aSI6InV1aWQifQ.NIX34s_7lJGlaEPRnoIj_mONQiwsoxgD9Q_NiS9pqG6c-R8k12IMNybKgVUlHt8eo7tsfh-eQsSt7oDXS_5Kkg';

	let module: TestingModule;
	let useCase: RefreshSessionUseCase;

	const checkJwtRefreshTokenExecute = jest.spyOn(CheckJwtTokenUseCase.prototype, 'execute');

	const createAccessToken = mock<CreateJwtAccessTokenUseCase>();
	const createRefreshToken = mock<CreateJwtRefreshTokenUseCase>();
	const setJwtToken = mock<SetJwtTokenUseCase>();

	const request = mock<Request>();

	const prepareTestingModule = async (
		configurationService: ConfigurationService,
	): Promise<void> => {
		module = await Test.createTestingModule({
			imports: [
				JwtModule.registerAsync({
					useFactory: () => new JwtFactory(configurationService).createJwtOptions(),
				}),
			],
			providers: [
				RefreshSessionUseCase,
				CheckJwtTokenUseCase,
				{ provide: REQUEST, useValue: request },
				{ provide: ConfigurationService, useValue: configurationService },
				{ provide: CreateJwtAccessTokenUseCase, useValue: createAccessToken },
				{ provide: CreateJwtRefreshTokenUseCase, useValue: createRefreshToken },
				{ provide: SetJwtTokenUseCase, useValue: setJwtToken },
			],
		}).compile();

		useCase = await module.resolve(RefreshSessionUseCase);
	};

	beforeAll(async () => {
		const configurationService = mock<ConfigurationService>({
			jwt: {
				secret: 'secret',
				algorithm: 'HS512',
				id: 'uuid',
				issuer: 'test',
				audience: 'test-runner',
				accessTokenExpiresIn: '15m',
				refreshTokenExpiresIn: '15d',
			},
		});

		await prepareTestingModule(configurationService);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('throw UnauthorizedException when the request missing cookies', async () => {
			const result = useCase.execute();

			expect(result).rejects.toThrow(UnauthorizedException);
			expect(result).rejects.toMatchObject({ response: { refreshToken: 'jwt must be provided' } });
		});

		it('throw UnauthorizedException when token is invalid', async () => {
			request.signedCookies['x-jwt-refresh-token'] = 'wrong-refresh-token';

			const result = useCase.execute();

			expect(result).rejects.toThrow(UnauthorizedException);
			expect(result).rejects.toMatchObject({ response: { refreshToken: 'jwt malformed' } });

			expect(checkJwtRefreshTokenExecute).toHaveBeenCalledTimes(1);
			expect(checkJwtRefreshTokenExecute).toHaveBeenCalledWith('wrong-refresh-token', 'refresh');
		});

		it('should call two times to setJwtToken useCase', async () => {
			request.signedCookies['x-jwt-refresh-token'] = fakeRefreshToken;

			const configurationService = mock<ConfigurationService>({
				jwt: {
					secret: 'secret',
					algorithm: 'HS512',
					id: 'uuid',
					issuer: 'test',
					audience: 'test-runner',
					accessTokenExpiresIn: '15m',
					refreshTokenExpiresIn: '15d',
				},
			});

			await prepareTestingModule(configurationService);

			createAccessToken.execute.mockReturnValueOnce('access-token');
			createRefreshToken.execute.mockReturnValueOnce('refresh-token');

			const result = await useCase.execute();

			expect(result).toStrictEqual(undefined);

			expect(checkJwtRefreshTokenExecute).toHaveBeenCalledTimes(1);
			expect(checkJwtRefreshTokenExecute).toHaveBeenCalledWith(fakeRefreshToken, 'refresh');

			expect(createAccessToken.execute).toHaveBeenCalledTimes(1);
			expect(createAccessToken.execute).toHaveBeenCalledWith('user-uuid');

			expect(createRefreshToken.execute).toHaveBeenCalledTimes(1);
			expect(createRefreshToken.execute).toHaveBeenCalledWith('user-uuid');

			expect(setJwtToken.execute).toHaveBeenCalledTimes(2);
			expect(setJwtToken.execute).toHaveBeenNthCalledWith(1, 'x-jwt-access-token', 'access-token');
			expect(setJwtToken.execute).toHaveBeenNthCalledWith(
				2,
				'x-jwt-refresh-token',
				'refresh-token',
			);
		});
	});
});
