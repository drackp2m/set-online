import { REQUEST } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { Request } from 'express';
import { mock } from 'jest-mock-extended';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';

import { LogoutUseCase } from './logout.use-case';

describe('LogoutUseCase', () => {
	let useCase: LogoutUseCase;

	const request = mock<Request>({ res: {} });
	const configurationService = mock<ConfigurationService>({
		jwt: {
			secret: 'secret',
			id: 'uuid',
			audience: 'test-runner',
			issuer: 'test',
		},
		api: {
			domain: 'localhost',
		},
	});

	const requestResponseClearCookie = jest.spyOn(
		request.res ?? { clearCookie: Function },
		'clearCookie',
	);

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LogoutUseCase,
				{ provide: REQUEST, useValue: request },
				{ provide: ConfigurationService, useValue: configurationService },
			],
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
				sameSite: 'none',
				path: '/graphql',
				domain: 'localhost',
			});
			expect(requestResponseClearCookie).toHaveBeenNthCalledWith(2, 'x-jwt-refresh-token', {
				signed: true,
				secure: true,
				httpOnly: true,
				sameSite: 'none',
				path: '/api/auth/refresh-session',
				domain: 'localhost',
			});
		});
	});
});
