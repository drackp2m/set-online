import { Test, TestingModule } from '@nestjs/testing';

import { SemaphoreNamespace } from '../definition/semaphore-namespace.enum';

import { SemaphoreManagerService } from './semaphore-manager.service';
import { SemaphoreService } from './semaphore.service';

describe('SemaphoreManagerService', () => {
	let util: SemaphoreManagerService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [SemaphoreManagerService],
		}).compile();

		util = await module.resolve(SemaphoreManagerService);
	});

	it('should be defined', () => {
		expect(util).toBeDefined();
	});

	describe('getInstance', () => {
		it('should return default instance when no parameter receive', () => {
			const defaultSemaphoreService = util.getInstance();

			expect(defaultSemaphoreService).toBeInstanceOf(SemaphoreService);
		});

		it('should return statuses from its own instance when we have different instances', () => {
			const defaultSemaphoreService = util.getInstance();

			const pingSemaphoreService = util.getInstance({ name: SemaphoreNamespace.ping });

			defaultSemaphoreService.acquire();
			pingSemaphoreService.acquire();
			pingSemaphoreService.acquire();
			pingSemaphoreService.acquire();

			const busyStatusFromDefaultInstance = defaultSemaphoreService['busy'];
			const queueLengthFromDefaultInstance = defaultSemaphoreService['queue'].length;
			const busyStatusFromPingInstance = pingSemaphoreService['busy'];
			const queueLengthFromPingInstance = pingSemaphoreService['queue'].length;

			expect(defaultSemaphoreService).toBeInstanceOf(SemaphoreService);
			expect(pingSemaphoreService).toBeInstanceOf(SemaphoreService);
			expect(defaultSemaphoreService).not.toEqual(pingSemaphoreService);

			expect(busyStatusFromDefaultInstance).toStrictEqual(true);
			expect(queueLengthFromDefaultInstance).toStrictEqual(0);
			expect(busyStatusFromPingInstance).toStrictEqual(true);
			expect(queueLengthFromPingInstance).toStrictEqual(2);
		});
	});
});
