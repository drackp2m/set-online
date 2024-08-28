import { REQUEST } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { mock } from 'jest-mock-extended';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JwtCookie } from '../definition/jwt-cookie.enum';

import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

describe('SetJwtTokenUseCase', () => {
	let useCase: SetJwtTokenUseCase;

	const request = mock<Request>({ res: {} });
	const configurationService = mock<ConfigurationService>({
		jwt: {
			secret: 'secret',
			id: 'uuid',
			audience: 'test-runner',
			issuer: 'test',
		},
		api: {
			cookieDomain: 'localhost',
		},
	});

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				SetJwtTokenUseCase,
				{ provide: REQUEST, useValue: request },
				{ provide: ConfigurationService, useValue: configurationService },
			],
		}).compile();

		useCase = await module.resolve(SetJwtTokenUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('calls once to cookie when called with type access ', async () => {
			const tokenType: JwtCookie = JwtCookie.access;
			const tokenValue = 'fake-access-token';

			useCase.execute(tokenType, tokenValue);

			expect(request.res?.cookie).toHaveBeenCalledTimes(1);
			expect(request.res?.cookie).toHaveBeenCalledWith(tokenType, tokenValue, {
				signed: true,
				secure: true,
				httpOnly: true,
				sameSite: true,
				path: '/graphql',
				domain: 'localhost',
			});
		});
	});

	it('calls once to cookie when called with type refresh ', async () => {
		const tokenType: JwtCookie = JwtCookie.refresh;
		const tokenValue = 'fake-refresh-token';

		useCase.execute(tokenType, tokenValue);

		expect(request.res?.cookie).toHaveBeenCalledTimes(1);
		expect(request.res?.cookie).toHaveBeenCalledWith(tokenType, tokenValue, {
			signed: true,
			secure: true,
			httpOnly: true,
			sameSite: 'none',
			path: '/api/auth/refresh-session',
			domain: 'localhost',
		});
	});
});
