import { EntityManager } from '@mikro-orm/core';
import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { UnauthorizedException } from '../../common/exceptions/unauthorized-exception.exception';
import { UserRole } from '../../user/interfaces/user-role.enum';
// import { UserFaker } from '../../user/user.faker';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
	let guard: RolesGuard;
	let entityManager: jest.Mocked<Partial<EntityManager>>;
	let executionContext: jest.Mocked<Partial<ExecutionContext>>;

	// const userFaker = new UserFaker();

	beforeAll(async () => {
		entityManager = {
			create: jest.fn(),
		};

		executionContext = {
			getHandler: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				RolesGuard,
				{ provide: EntityManager, useValue: entityManager },
			],
		}).compile();

		guard = module.get<RolesGuard>(RolesGuard);
	});

	it('should be defined', () => {
		expect(guard).toBeDefined();
	});

	describe('canActivate', () => {
		it('should return True when context has no context', async () => {
			executionContext.getHandler.mockReturnValueOnce(() => undefined);

			const result = await guard.canActivate(
				executionContext as ExecutionContext,
			);

			expect(result).toStrictEqual(true);
		});
	});

	xit('should return True when context has no context', async () => {
		executionContext.getHandler.mockReturnValueOnce(() => ({
			switchToHttp: () => ({
				getRequest: () => ({
					headers: {
						authorization: 'auth',
					},
					roles: [UserRole.Admin],
				}),
			}),
		}));

		const result = guard.canActivate(executionContext as ExecutionContext);

		await expect(result).rejects.toThrow(UnauthorizedException);
	});
});
