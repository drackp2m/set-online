import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { FuckUseCase, FuckingFuck } from './fuck.use-case';

describe('FuckUseCase', () => {
	let useCase: FuckUseCase;
	const fuckingFuck = mock<FuckingFuck>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				FuckUseCase,
				{
					provide: FuckingFuck,
					useValue: fuckingFuck,
				},
			],
		}).compile();

		useCase = await module.resolve<FuckUseCase>(FuckUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return undefined when mock not return anything', () => {
			const result = useCase.execute(42);

			expect(result).toStrictEqual(undefined);

			expect(fuckingFuck.fuck).toBeCalledTimes(1);
			expect(fuckingFuck.fuck).nthCalledWith(1, 42);
		});

		it('should return 2 as string when wall with 2 as number', () => {
			fuckingFuck.fuck.calledWith(2).mockReturnValueOnce('2');

			const result = useCase.execute(2);

			expect(result).toStrictEqual('2');

			expect(fuckingFuck.fuck).toBeCalledTimes(1);
			expect(fuckingFuck.fuck).nthCalledWith(1, 2);
		});

		it('should return 01 as string when wall with 10 as number', () => {
			fuckingFuck.fuck.calledWith(10).mockReturnValueOnce('01');

			const result = useCase.execute(10);

			expect(result).toStrictEqual('01');

			expect(fuckingFuck.fuck).toBeCalledTimes(1);
			expect(fuckingFuck.fuck).nthCalledWith(1, 10);
		});
	});
});
