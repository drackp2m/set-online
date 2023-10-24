import { REQUEST } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { mock } from 'jest-mock-extended';

import { JwtCookie } from '../definition/jwt-cookie.enum';

import { SetJwtTokenUseCase } from './set-jwt-token.use-case';

describe('SetJwtTokenUseCase', () => {
	let useCase: SetJwtTokenUseCase;

	const request = mock<Request>({ res: {} });

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SetJwtTokenUseCase, { provide: REQUEST, useValue: request }],
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

			expect(request.res.cookie).toHaveBeenCalledTimes(1);
			expect(request.res.cookie).toBeCalledWith(tokenType, tokenValue, {
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

		expect(request.res.cookie).toHaveBeenCalledTimes(1);
		expect(request.res.cookie).toBeCalledWith(tokenType, tokenValue, {
			signed: true,
			secure: true,
			httpOnly: true,
			sameSite: true,
			path: '/api/auth/refresh-session',
			domain: 'localhost',
		});
	});
});
