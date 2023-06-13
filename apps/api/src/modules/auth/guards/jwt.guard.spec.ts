import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { UnauthorizedException } from '../../../common/exceptions';
import { UserFaker } from '../../user/factories';
import { UserEntity } from '../../user/user.entity';
import { JwtGuard } from './jwt.guard';

describe('JwtGuard', () => {
	let guard: JwtGuard;
	let executionContext: jest.Mocked<Partial<ExecutionContext>>;

	const userFaker = new UserFaker();
	const mockUser = userFaker.makeOne();

	beforeAll(async () => {
		executionContext = {
			getHandler: jest.fn(),
			getType: jest.fn().mockReturnValueOnce('graphql'),
			getArgs: jest.fn(),
			getClass: jest.fn(),
		};

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
			executionContext.getArgs.mockReturnValueOnce([
				{},
				{},
				{ req: { key: 'value' } },
				{},
			]);

			const result = guard.getRequest(executionContext as ExecutionContext);

			expect(result).toStrictEqual({ key: 'value' });
		});
	});

	describe('handleRequest', () => {
		it('should throws UnauthorizedException when pass error', () => {
			const execution = () =>
				guard.handleRequest<UserEntity>(new Error(), undefined);

			expect(execution).toThrow(UnauthorizedException);
		});

		it('should return Undefined when error is missing and payload is False', () => {
			const payload = guard.handleRequest<UserEntity>(undefined, false);

			expect(payload).toStrictEqual(undefined);
		});

		it('should return UserEntity when error is missing and payload is an UserEntity', () => {
			const payload = guard.handleRequest<UserEntity>(undefined, mockUser);

			expect(payload).toStrictEqual(mockUser);
		});
	});
});
