import { Test, TestingModule } from '@nestjs/testing';

import { GenerateNowDateUseCase } from '../use-case/generate-now-date.use-case';

import { EditableDate } from './editable-date';

describe('EditableDate', () => {
	let util: EditableDate;

	const fakeDate = new Date('2023-11-13T23:41:19.846Z');

	jest.spyOn(GenerateNowDateUseCase.prototype, 'execute').mockReturnValue(fakeDate);

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [EditableDate],
		}).compile();

		util = await module.resolve(EditableDate);
	});

	it('should be defined', () => {
		expect(util).toBeDefined();
	});

	// ToDo => check why manipulationDateAttributeMethod switch case is not fully covered

	describe('initialization', () => {
		it('should return now date when the constructor is called without parameters', async () => {
			const result = util.toISOString();

			expect(result).toStrictEqual('2023-11-13T23:41:19.846Z');
		});

		it('should return the date specified in the constructor', async () => {
			const fakeDate = new Date('2023-01-01T00:00:00.000Z');

			const result = new EditableDate(fakeDate).toISOString();

			expect(result).toStrictEqual(fakeDate.toISOString());
		});

		it('should set and edit several values of the date specified in the constructor', async () => {
			const fakeDate = new Date('2023-01-01T00:00:00.000Z');

			const result = new EditableDate(fakeDate).set('hour', 48).edit('day', -1).toISOString();

			expect(result).toStrictEqual('2023-01-02T00:00:00.000Z');
		});

		it('should replace year when call set method', async () => {
			const result = util.set('year', 2019).toISOString();

			expect(result).toStrictEqual('2019-11-13T23:41:19.846Z');
		});

		it('should replace month when call set method', async () => {
			const result = util.set('month', 6).toISOString();

			expect(result).toStrictEqual('2023-06-13T23:41:19.846Z');
		});

		it('should replace day when call set method', async () => {
			const result = util.set('day', 12).toISOString();

			expect(result).toStrictEqual('2023-11-12T23:41:19.846Z');
		});

		it('should replace hour when call set method', async () => {
			const result = util.set('hour', 21).toISOString();

			expect(result).toStrictEqual('2023-11-13T21:41:19.846Z');
		});

		it('should replace minute when call set method', async () => {
			const result = util.set('minute', 66).toISOString();

			expect(result).toStrictEqual('2023-11-14T00:06:19.846Z');
		});

		it('should replace second when call set method', async () => {
			const result = util.set('second', 42).toISOString();

			expect(result).toStrictEqual('2023-11-13T23:41:42.846Z');
		});

		it('should replace millisecond when call set method', async () => {
			const result = util.set('millisecond', 360).toISOString();

			expect(result).toStrictEqual('2023-11-13T23:41:19.360Z');
		});

		it('should replace several values when calling the set method multiple times', async () => {
			const result = util.set('year', 1999).set('hour', 9).toISOString();

			expect(result).toStrictEqual('1999-11-13T09:41:19.846Z');
		});

		it('should edit several values when calling the set method multiple times', async () => {
			const result = util.edit('month', -1).edit('second', 14).toISOString();

			expect(result).toStrictEqual('2023-10-13T23:41:33.846Z');
		});

		it('should set and edit several values when calling methods multiple times', async () => {
			const result = util
				.set('year', 2048)
				.edit('month', -1)
				.set('second', 14)
				.edit('second', 14)
				.toISOString();

			expect(result).toStrictEqual('2048-10-13T23:41:28.846Z');
		});
	});
});
