import { BadRequestException } from './bad-request.exception';

describe('BadRequestException', () => {
	let subject: BadRequestException;

	beforeEach(async () => {
		subject = new BadRequestException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should return `BadRequestException`', () => {
			expect(subject.name).toStrictEqual('BadRequestException');
		});
	});

	describe('message', () => {
		it('should return `Bad request`', () => {
			expect(subject.message).toStrictEqual('Bad request');
		});
	});

	describe('getStatus', () => {
		it('should return `400`', () => {
			expect(subject.getStatus()).toStrictEqual(400);
		});
	});

	describe('getResponse', () => {
		it('should return `Bad request` by default', () => {
			expect(subject.getResponse()).toStrictEqual('Bad request');
		});

		it('should return string with specified details', () => {
			subject = new BadRequestException('invalid format');

			expect(subject.getResponse()).toStrictEqual('invalid format');
		});

		it('should return object with specified origin / details', () => {
			subject = new BadRequestException('invalid format', 'email');

			expect(subject.getResponse()).toStrictEqual({ email: 'invalid format' });
		});
	});

	describe('stack', () => {
		it('should contain file and line where he has been thrown', () => {
			try {
				throw new BadRequestException();
			} catch (error) {
				expect(error).toBeInstanceOf(BadRequestException);
				expect((error as BadRequestException).stack).toContain('bad-request.exception.spec.ts:53');
			}
		});
	});
});
