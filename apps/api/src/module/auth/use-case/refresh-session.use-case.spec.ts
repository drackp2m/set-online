import { REQUEST } from '@nestjs/core';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { mock } from 'jest-mock-extended';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JwtFactory } from '../../../shared/module/config/factories/jwt.factory';

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

	const jwtServiceVerify = jest.spyOn(JwtService.prototype, 'verify');

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
				{ provide: REQUEST, useValue: request },
				{ provide: CreateJwtAccessTokenUseCase, useValue: createAccessToken },
				{ provide: CreateJwtRefreshTokenUseCase, useValue: createRefreshToken },
				{ provide: SetJwtTokenUseCase, useValue: setJwtToken },
			],
		}).compile();

		useCase = await module.resolve<RefreshSessionUseCase>(RefreshSessionUseCase);
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
			const execution = useCase.execute();

			await expect(execution).rejects.toThrowError(UnauthorizedException);
		});

		it('throw UnauthorizedException when token is invalid', async () => {
			request.signedCookies['x-jwt-refresh-token'] = 'wrong-refresh-token';

			const execution = useCase.execute();

			await expect(execution).rejects.toThrowError(UnauthorizedException);

			expect(jwtServiceVerify).toBeCalledTimes(1);
			expect(jwtServiceVerify).toBeCalledWith('wrong-refresh-token');
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

			const execution = await useCase.execute();

			expect(execution).toStrictEqual(undefined);

			expect(jwtServiceVerify).toBeCalledTimes(1);
			expect(jwtServiceVerify).toBeCalledWith(fakeRefreshToken);

			expect(createAccessToken.execute).toBeCalledTimes(1);
			expect(createAccessToken.execute).toBeCalledWith('user-uuid');

			expect(createRefreshToken.execute).toBeCalledTimes(1);
			expect(createRefreshToken.execute).toBeCalledWith('user-uuid');

			expect(setJwtToken.execute).toBeCalledTimes(2);
			expect(setJwtToken.execute).nthCalledWith(1, 'x-jwt-access-token', 'access-token');
			expect(setJwtToken.execute).nthCalledWith(2, 'x-jwt-refresh-token', 'refresh-token');
		});
	});
});
