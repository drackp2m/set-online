import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { UserFaker } from '../../user/factory/user.faker';
import { UserEntity } from '../../user/user.entity';

import { JwtGuard } from './jwt.guard';

describe('JwtGuard', () => {
	let guard: JwtGuard;
	const executionContext = mock<ExecutionContext>();

	const userFaker = new UserFaker();
	const fakeUser = userFaker.makeOne();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [JwtGuard],
		}).compile();

		guard = module.get<JwtGuard>(JwtGuard);
	});

	it('should be defined', () => {
		expect(guard).toBeDefined();
	});

	describe('getRequest', () => {
		it('should transform the context correctly from GraphQL executation context', () => {
			executionContext.getArgs.mockReturnValueOnce([{}, {}, { req: { key: 'value' } }, {}]);

			const result = guard.getRequest(executionContext as ExecutionContext);

			expect(result).toStrictEqual({ key: 'value' });
		});
	});

	describe('handleRequest', () => {
		it('throw UnauthorizedException when pass error', () => {
			const execution = () => guard.handleRequest<UserEntity>(new Error(), undefined);

			expect(execution).toThrow(UnauthorizedException);
		});

		it('should return Undefined when error is missing and payload is False', () => {
			const payload = guard.handleRequest<UserEntity>(undefined, false);

			expect(payload).toStrictEqual(undefined);
		});

		it('should return UserEntity when error is missing and payload is an UserEntity', () => {
			const payload = guard.handleRequest<UserEntity>(undefined, fakeUser);

			expect(payload).toStrictEqual(fakeUser);
		});
	});
});
