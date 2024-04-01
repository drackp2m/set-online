import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { UserFaker } from '../../user/factory/user.faker';
import { User } from '../../user/user.entity';

import { JwtGuard } from './jwt.guard';

describe('JwtGuard', () => {
	let guard: JwtGuard;
	const executionContext = mock<ExecutionContext>();

	const userFaker = UserFaker;
	const fakeUser = userFaker.makeOne();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [JwtGuard],
		}).compile();

		guard = await module.resolve(JwtGuard);
	});

	it('should be defined', () => {
		expect(guard).toBeDefined();
	});

	describe('getRequest', () => {
		it('should transform the context correctly from GraphQL execution context', () => {
			executionContext.getArgs.mockReturnValueOnce([{}, {}, { req: { key: 'value' } }, {}]);

			const result = guard.getRequest(executionContext as ExecutionContext);

			expect(result).toStrictEqual({ key: 'value' });
		});
	});

	describe('handleRequest', () => {
		it('throw UnauthorizedException when pass error', () => {
			const execution = () => guard.handleRequest<User>(new Error());

			expect(execution).toThrow(UnauthorizedException);
		});

		it('should return Undefined when error and payload are missing', () => {
			const payload = guard.handleRequest<User>();

			expect(payload).toStrictEqual(undefined);
		});

		it('should return User when error is missing and payload is an User', () => {
			const payload = guard.handleRequest<User>(undefined, fakeUser);

			expect(payload).toStrictEqual(fakeUser);
		});
	});
});
