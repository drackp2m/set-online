import { Test, TestingModule } from '@nestjs/testing';

import { CacheNamespace } from '../definition/cache-namespace.enum';

import { CacheManagerService } from './cache-manager.service';
import { NodeCacheService } from './node-cache.service';

describe('CacheManagerService', () => {
	let util: CacheManagerService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [CacheManagerService],
		}).compile();

		util = await module.resolve(CacheManagerService);
	});

	it('should be defined', () => {
		expect(util).toBeDefined();
	});

	describe('getInstance', () => {
		it('should return default instance when no parameter receive', () => {
			const defaultNodeCacheService = util.getInstance();

			expect(defaultNodeCacheService).toBeInstanceOf(NodeCacheService);
		});

		it('should return a concrete instance with the defined configuration', () => {
			jest.useFakeTimers();

			const instance = util.getInstance({ name: CacheNamespace.ping, ttl: 5 });

			instance['nodeCache'].set('foo', 'bar');

			jest.advanceTimersByTime(4 * 1000);

			const fooValue = instance['nodeCache'].get('foo');
			const barValue = instance['nodeCache'].get('bar');

			jest.advanceTimersByTime(2 * 1000);

			const barValueAfterExpire = instance['nodeCache'].get('bar');

			expect(fooValue).toStrictEqual('bar');
			expect(barValue).toStrictEqual(undefined);
			expect(barValueAfterExpire).toStrictEqual(undefined);
		});

		it('should return data from its own instance when we have different instances', () => {
			const defaultNodeCacheService = util.getInstance();

			const pingNodeCacheService = util.getInstance({ name: CacheNamespace.ping, ttl: 5 });

			defaultNodeCacheService['nodeCache'].set('foo', 'bar');
			pingNodeCacheService['nodeCache'].set('bar', 'foo');

			const fooFromDefaultInstance = defaultNodeCacheService['nodeCache'].get('foo');
			const fooFromPingInstance = pingNodeCacheService['nodeCache'].get('foo');
			const barFromDefaultInstance = defaultNodeCacheService['nodeCache'].get('bar');
			const barFromPingInstance = pingNodeCacheService['nodeCache'].get('bar');

			expect(pingNodeCacheService).toBeInstanceOf(NodeCacheService);
			expect(defaultNodeCacheService).not.toEqual(pingNodeCacheService);

			expect(fooFromDefaultInstance).toStrictEqual('bar');
			expect(fooFromPingInstance).toStrictEqual(undefined);
			expect(barFromDefaultInstance).toStrictEqual(undefined);
			expect(barFromPingInstance).toStrictEqual('foo');
		});
	});
});
