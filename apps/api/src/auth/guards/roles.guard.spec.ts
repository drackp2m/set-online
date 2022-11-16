import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { ForbiddenException } from '../../common/exceptions/forbiden.exception';
import { UnauthorizedException } from '../../common/exceptions/unauthorized-exception.exception';
import { UserRole } from '../../user/interfaces/user-role.enum';
import { User } from '../../user/user.entity';
import { UserFaker } from '../../user/user.faker';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
	let guard: RolesGuard;
	let executionContext: jest.Mocked<Partial<ExecutionContext>>;

	const handler = () => undefined;
	const userFaker = new UserFaker();

	beforeAll(async () => {
		executionContext = {
			getHandler: jest.fn(),
			getType: jest.fn().mockReturnValueOnce('graphql'),
			getArgs: jest.fn(),
			getClass: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [RolesGuard],
		}).compile();

		guard = module.get<RolesGuard>(RolesGuard);
	});

	it('should be defined', () => {
		expect(guard).toBeDefined();
	});

	describe('canActivate', () => {
		it('should return True when context is empty', async () => {
			Reflect.deleteMetadata('roles', handler);
			executionContext.getHandler.mockReturnValueOnce(handler);

			const result = await guard.canActivate(
				executionContext as ExecutionContext,
			);

			expect(result).toStrictEqual(true);
		});

		it('should throws Unauthorized when context has UserRole but args does not have User', async () => {
			Reflect.defineMetadata('roles', UserRole.Registered, handler);
			executionContext.getHandler.mockReturnValueOnce(handler);
			executionContext.getArgs.mockReturnValueOnce(getArgsWith(undefined));

			const result = guard.canActivate(executionContext as ExecutionContext);

			await expect(result).rejects.toThrow(UnauthorizedException);
		});

		it('should throws Forbidden when context has UserRole but args User has no privileges', async () => {
			Reflect.defineMetadata('roles', UserRole.Registered, handler);

			executionContext.getHandler.mockReturnValueOnce(handler);
			executionContext.getArgs.mockReturnValueOnce(
				getArgsWith(userFaker.makeOne({ role: UserRole.Guest })),
			);

			const result = guard.canActivate(executionContext as ExecutionContext);

			await expect(result).rejects.toThrow(ForbiddenException);
		});

		it('should return True when context has UserRole and args User has privileges', async () => {
			Reflect.defineMetadata('roles', UserRole.Registered, handler);

			executionContext.getHandler.mockReturnValueOnce(handler);
			executionContext.getArgs.mockReturnValueOnce(
				getArgsWith(userFaker.makeOne({ role: UserRole.Admin })),
			);

			const result = await guard.canActivate(
				executionContext as ExecutionContext,
			);

			expect(result).toStrictEqual(true);
		});
	});

	function getArgsWith(user: User): Record<string, unknown>[] {
		return [
			{},
			{},
			{
				req: {
					user,
				},
			},
			{},
		];
	}
});
