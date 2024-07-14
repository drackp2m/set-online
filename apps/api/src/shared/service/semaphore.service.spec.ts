import { inspect } from 'util';

import { Test, TestingModule } from '@nestjs/testing';

import { SemaphoreService } from './semaphore.service';

describe('SemaphoreService', () => {
	let util: SemaphoreService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SemaphoreService],
		}).compile();

		util = await module.resolve(SemaphoreService);
	});

	it('should be defined', () => {
		expect(util).toBeDefined();
	});

	it('should keep initial state when no interactions', () => {
		expect(util['queue'].length).toStrictEqual(0);
		expect(util['busy']).toStrictEqual(false);
	});

	describe('acquire', () => {
		it('should resolve promise immediately when queue is empty', () => {
			const result = util.acquire();

			expect(inspect(result).includes('undefined')).toStrictEqual(true);

			expect(util['queue'].length).toStrictEqual(0);
			expect(util['busy']).toStrictEqual(true);
		});

		it('should keep promise open when the queue has items', () => {
			util.acquire();
			const result = util.acquire();

			expect(inspect(result).includes('pending')).toStrictEqual(true);

			expect(util['queue'].length).toStrictEqual(1);
			expect(util['busy']).toStrictEqual(true);
		});
	});

	describe('release', () => {
		it('should keep initial state when call once', () => {
			util.release();

			expect(util['queue'].length).toStrictEqual(0);
			expect(util['busy']).toStrictEqual(false);
		});

		it('should release semaphore when it has an item', () => {
			util.acquire();

			expect(util['queue'].length).toStrictEqual(0);
			expect(util['busy']).toStrictEqual(true);

			util.release();

			expect(util['queue'].length).toStrictEqual(0);
			expect(util['busy']).toStrictEqual(false);
		});

		it('should decrease queue in one when it has many elements', () => {
			util.acquire();
			util.acquire();
			util.acquire();

			expect(util['queue'].length).toStrictEqual(2);
			expect(util['busy']).toStrictEqual(true);

			util.release();

			expect(util['queue'].length).toStrictEqual(1);
			expect(util['busy']).toStrictEqual(true);
		});
	});
});
