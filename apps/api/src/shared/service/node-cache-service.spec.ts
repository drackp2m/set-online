import { Test, TestingModule } from '@nestjs/testing';
import NodeCache from 'node-cache';

import { NodeCacheService } from './node-cache.service';
import { SemaphoreService } from './semaphore.service';

describe('NodeCacheService', () => {
	let util: NodeCacheService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [NodeCacheService],
		}).compile();

		util = await module.resolve(NodeCacheService);
	});

	it('should be defined', () => {
		expect(util).toBeDefined();

		expect(util['nodeCache']).toBeInstanceOf(NodeCache);
		expect(util['semaphore']).toBeInstanceOf(SemaphoreService);
	});

	describe('set', () => {
		it('should persist value for the preset time', async () => {
			jest.useFakeTimers();

			await util.set('persist', 'value');

			jest.advanceTimersByTime(59 * 1000);

			const resultBeforeExpire = util['nodeCache'].get('persist');

			jest.advanceTimersByTime(2 * 1000);

			const resultAfterExpire = util['nodeCache'].get('persist');

			expect(resultBeforeExpire).toStrictEqual('value');
			expect(resultAfterExpire).toStrictEqual(undefined);
		});

		it('should persist value for the specified time', async () => {
			jest.useFakeTimers();

			await util.set('persist', 'value', 5);

			jest.advanceTimersByTime(4 * 1000);

			const resultBeforeExpire = util['nodeCache'].get('persist');

			jest.advanceTimersByTime(6 * 1000);

			const resultAfterExpire = util['nodeCache'].get('persist');

			expect(resultBeforeExpire).toStrictEqual('value');
			expect(resultAfterExpire).toStrictEqual(undefined);
		});

		it('should override existent value', async () => {
			await util.set('key', 'initial value');

			const initialValueResult = util['nodeCache'].get('key');

			expect(initialValueResult).toStrictEqual('initial value');

			await util.set('key', 'overwritten value');

			const resultAfterExpire = util['nodeCache'].get('key');

			expect(resultAfterExpire).toStrictEqual('overwritten value');
		});
	});

	describe('get', () => {
		it('should return undefined when item never existed', async () => {
			const result = await util.get('never-existed');

			expect(result).toStrictEqual(undefined);
		});

		it('should return value when item exists', async () => {
			util['nodeCache'].set('item', 'exists');

			const result = await util.get('item');

			expect(result).toStrictEqual('exists');
		});

		it('should return undefined when item is expired', async () => {
			jest.useFakeTimers();

			util['nodeCache'].set('expires', 'super fast', 10);

			const existentResult = await util.get('expires');

			jest.advanceTimersByTime(11 * 1000);

			const result = await util.get('expires');

			expect(existentResult).toStrictEqual('super fast');
			expect(result).toStrictEqual(undefined);
		});
	});

	describe('getAll', () => {
		it('should return empty object when no items found', async () => {
			const result = await util.getAll();

			expect(result).toStrictEqual({});
		});

		it('should return multiple items at time', async () => {
			util['nodeCache'].set('foo', 'bar');
			util['nodeCache'].set('bar', 'foo');

			const result = await util.getAll();

			expect(result).toStrictEqual({
				foo: 'bar',
				bar: 'foo',
			});
		});

		it('should return only non-expired items', async () => {
			jest.useFakeTimers();

			util['nodeCache'].set('foo', 'bar');

			jest.advanceTimersByTime(30 * 1000);

			util['nodeCache'].set('bar', 'foo');
			util['nodeCache'].set('baz', 'qux');

			const resultWithAllItems = await util.getAll();

			jest.advanceTimersByTime(31 * 1000);

			const resultWithoutExpiredItems = await util.getAll();

			expect(resultWithAllItems).toStrictEqual({
				foo: 'bar',
				bar: 'foo',
				baz: 'qux',
			});
			expect(resultWithoutExpiredItems).toStrictEqual({
				bar: 'foo',
				baz: 'qux',
			});
		});
	});

	describe('getAllKeys', () => {
		it('should return empty array when no items found', async () => {
			const result = await util.getAllKeys();

			expect(result).toStrictEqual([]);
		});

		it('should return keys from all stored items', async () => {
			util['nodeCache'].set('foo', 'bar');
			util['nodeCache'].set('bar', 'foo');

			const result = await util.getAllKeys();

			expect(result).toStrictEqual(['foo', 'bar']);
		});

		it('should return only keys from non-expired items', async () => {
			util['nodeCache'].set('foo', 'bar');
			util['nodeCache'].set('bar', 'foo');

			const result = await util.getAllKeys();

			expect(result).toStrictEqual(['foo', 'bar']);
		});
	});

	describe('updateTtl', () => {
		it('shout return false when item not exists', async () => {
			const result = await util.updateTtl('foo', 42);

			expect(result).toStrictEqual(false);
		});

		it('shout return false when item not exists', async () => {
			jest.useFakeTimers();

			util['nodeCache'].set('foo', 'bar', 10);

			jest.advanceTimersByTime(20 * 1000);

			const result = await util.updateTtl('foo', 42);

			expect(result).toStrictEqual(false);
		});

		it('shout increase ttl of item stored', async () => {
			util['nodeCache'].set('foo', 'bar', 10);

			const now = new Date().getTime();

			const currentTtl = util['nodeCache'].getTtl('foo');

			expect(currentTtl).toStrictEqual(now + 10 * 1000);

			const result = await util.updateTtl('foo', 42);
			const updatedTtl = util['nodeCache'].getTtl('foo');

			expect(result).toStrictEqual(true);
			expect(updatedTtl).toStrictEqual(now + 42 * 1000);
		});

		it('shout decrease ttl of item stored', async () => {
			util['nodeCache'].set('foo', 'bar', 100);

			const now = new Date().getTime();

			const currentTtl = util['nodeCache'].getTtl('foo');

			expect(currentTtl).toStrictEqual(now + 100 * 1000);

			const result = await util.updateTtl('foo', 42);
			const updatedTtl = util['nodeCache'].getTtl('foo');

			expect(result).toStrictEqual(true);
			expect(updatedTtl).toStrictEqual(now + 42 * 1000);
		});

		it('shout decrease ttl of item stored', async () => {
			jest.useFakeTimers();
			util['nodeCache'].set('foo', 'bar', 100);

			const now = new Date().getTime();

			const currentTtl = util['nodeCache'].getTtl('foo');

			expect(currentTtl).toStrictEqual(now + 100 * 1000);

			const result = await util.updateTtl('foo');

			const updatedTtl = util['nodeCache'].getTtl('foo');

			expect(result).toStrictEqual(true);
			expect(updatedTtl).toStrictEqual(now + 60 * 1000);
		});
	});
});
