import { Test, TestingModule } from '@nestjs/testing';

import { BasicFaker } from './basic.faker';

describe('BasicFaker', () => {
	let util: BasicFaker;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [BasicFaker],
		}).compile();

		util = await module.resolve(BasicFaker);
	});

	it('should be defined', () => {
		expect(util).toBeDefined();
	});

	describe('boolean', () => {
		it('should return boolean value', () => {
			const result = BasicFaker.boolean();

			expect(typeof result).toStrictEqual('boolean');
		});
	});

	describe('randomEnum', () => {
		it('should throw exception when enum is empty', () => {
			enum emptyEnum {}

			expect(() => BasicFaker.randomEnum(emptyEnum)).toThrow(new Error('Enum is empty'));
		});

		it('should return random numeric value from provided basic enum', () => {
			enum basicEnum {
				One,
				Two,
				Three,
			}

			const result = BasicFaker.randomEnum(basicEnum);

			expect(typeof result).toStrictEqual('number');
			expect(Object.values(basicEnum).includes(result)).toStrictEqual(true);
		});

		it('should return random value from provided enum', () => {
			enum myEnum {
				Four = 'four',
				Five = 'five',
				Six = 'six',
			}

			const result = BasicFaker.randomEnum(myEnum);

			expect(typeof result).toStrictEqual('string');
			expect(Object.values(myEnum).includes(result)).toStrictEqual(true);
		});
	});
});
