import { NotFoundException } from './not-found.exception';

describe('NotFoundException', () => {
	let subject: NotFoundException;

	beforeEach(async () => {
		subject = new NotFoundException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should have `NotFoundException`', () => {
			expect(subject.name).toStrictEqual('NotFoundException');
		});
	});

	describe('message', () => {
		it('should return `Not found`', () => {
			expect(subject.message).toStrictEqual('Not found');
		});
	});

	describe('getStatus', () => {
		it('should return `404`', () => {
			expect(subject.getStatus()).toStrictEqual(404);
		});
	});

	describe('getResponse', () => {
		it('should return `Not found` by default', () => {
			expect(subject.getResponse()).toStrictEqual('Not found');
		});

		it('should return string with specified details', () => {
			subject = new NotFoundException('not exists');

			expect(subject.getResponse()).toStrictEqual('not exists');
		});

		it('should have message specified in the constructor', () => {
			subject = new NotFoundException('not exists', 'item');

			expect(subject.getResponse()).toStrictEqual({ item: 'not exists' });
		});
	});

	describe('stack', () => {
		it('should contain file and line of throw in stack property', () => {
			try {
				throw new NotFoundException();
			} catch (error) {
				expect(error).toBeInstanceOf(NotFoundException);
				expect((error as NotFoundException).stack).toContain('not-found.exception.spec.ts:53');
			}
		});
	});
});
