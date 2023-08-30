import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { ForbiddenException } from '../../../shared/exception/forbidden.exception';
import { UnauthorizedException } from '../../../shared/exception/unauthorized-exception.exception';
import { UserRole } from '../../user/definition/user-role.enum';
import { UserFaker } from '../../user/factory/user.faker';
import { User } from '../../user/user.entity';

import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
	let guard: RolesGuard;

	const executionContext = mock<ExecutionContext>();

	const handler = () => [];
	const userFaker = UserFaker;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [RolesGuard],
		}).compile();

		guard = module.get<RolesGuard>(RolesGuard);
	});

	it('should be defined', () => {
		expect(guard).toBeDefined();
	});

	describe('canActivate', () => {
		it('throw UnauthorizedException when context is empty', async () => {
			executionContext.getHandler.mockReturnValueOnce(handler);
			executionContext.getArgs.mockReturnValueOnce(getExecutionContextArgsWith(undefined));

			const result = guard.canActivate(executionContext as ExecutionContext);

			expect(result).rejects.toThrow(UnauthorizedException);
			expect(result).rejects.toMatchObject({ response: { authorization: 'invalid bearer' } });
		});

		it('throw UnauthorizedException when context has UserRole but args does not have User', async () => {
			Reflect.defineMetadata('roles', [UserRole.Registered], handler);

			executionContext.getHandler.mockReturnValueOnce(handler);
			executionContext.getArgs.mockReturnValueOnce(getExecutionContextArgsWith(undefined));

			const result = guard.canActivate(executionContext as ExecutionContext);

			expect(result).rejects.toThrow(UnauthorizedException);
			expect(result).rejects.toMatchObject({ response: { authorization: 'invalid bearer' } });
		});

		it('throw ForbiddenException when context has UserRole but args User has no privileges', async () => {
			Reflect.defineMetadata('roles', UserRole.Registered, handler);

			executionContext.getHandler.mockReturnValueOnce(handler);
			executionContext.getArgs.mockReturnValueOnce(
				getExecutionContextArgsWith(userFaker.makeOne({ role: UserRole.Guest })),
			);

			const result = guard.canActivate(executionContext as ExecutionContext);

			expect(result).rejects.toThrow(ForbiddenException);
			expect(result).rejects.toMatchObject({ response: { role: 'not allowed' } });
		});

		it('should return True when context has UserRole and args User has privileges', async () => {
			Reflect.defineMetadata('roles', UserRole.Registered, handler);

			executionContext.getHandler.mockReturnValueOnce(handler);
			executionContext.getArgs.mockReturnValueOnce(
				getExecutionContextArgsWith(userFaker.makeOne({ role: UserRole.Admin })),
			);

			const result = await guard.canActivate(executionContext as ExecutionContext);

			expect(result).toStrictEqual(true);
		});
	});

	function getExecutionContextArgsWith(user: User | undefined): Record<string, unknown>[] {
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
