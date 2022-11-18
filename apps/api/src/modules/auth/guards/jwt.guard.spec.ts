import { ExecutionContext } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { JwtGuard } from './jwt.guard';

describe('JwtGuard', () => {
	let guard: JwtGuard;
	let executionContext: jest.Mocked<Partial<ExecutionContext>>;

	// const handler = () => undefined;
	// const userFaker = new UserFaker();

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
		it('should return True when context is empty', () => {
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
});
