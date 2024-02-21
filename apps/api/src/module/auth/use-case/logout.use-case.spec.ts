import { REQUEST } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { mock } from 'jest-mock-extended';

import { LogoutUseCase } from './logout.use-case';

describe('LogoutUseCase', () => {
	let useCase: LogoutUseCase;

	const request = mock<Request>({ res: {} });

	const requestResponseClearCookie = jest.spyOn(request.res, 'clearCookie');

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [LogoutUseCase, { provide: REQUEST, useValue: request }],
		}).compile();

		useCase = await module.resolve(LogoutUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should call two times to clearCookie', async () => {
			useCase.execute();

			expect(requestResponseClearCookie).toHaveBeenCalledTimes(2);

			expect(requestResponseClearCookie).toHaveBeenNthCalledWith(1, 'x-jwt-access-token', {
				signed: true,
				secure: true,
				httpOnly: true,
				sameSite: true,
				path: '/graphql',
				domain: 'localhost',
			});
			expect(requestResponseClearCookie).toHaveBeenNthCalledWith(2, 'x-jwt-refresh-token', {
				signed: true,
				secure: true,
				httpOnly: true,
				sameSite: true,
				path: '/api/auth/refresh-session',
				domain: 'localhost',
			});
		});
	});
});
