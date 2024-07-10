import { Test, TestingModule } from '@nestjs/testing';

import { DateFaker } from './date.faker';

describe('DateFaker', () => {
	let util: DateFaker;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [DateFaker],
		}).compile();

		util = await module.resolve(DateFaker);
	});

	it('should be defined', () => {
		// console.log(process.env.NODE_ENV);
		expect(util).toBeDefined();
	});

	describe('createdAt', () => {
		it('should return a valid date', () => {
			const result = util.createdAt();

			expect(result).toBeInstanceOf(Date);
		});

		it('should return null when invalid `since` date is passed', () => {
			const result = util.createdAt('invalid');

			expect(result).toStrictEqual(null);
		});

		it('should return null when `since` date above now is passed', () => {
			const since = new Date('2048-10-20');

			const result = util.createdAt(since.getTime());

			expect(result).toStrictEqual(null);
		});

		it('should return Date between now and `since` when `since` date below now is passed', () => {
			const now = new Date();
			const since = new Date('1731-10-20');

			const result = util.createdAt(since.getTime());

			expect(result?.getTime()).toBeGreaterThanOrEqual(since.getTime());
			expect(result?.getTime()).toBeLessThanOrEqual(now.getTime());
		});
	});
});
