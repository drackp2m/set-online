import { ForbiddenException } from './forbidden.exception';

describe('ForbiddenException', () => {
	let subject: ForbiddenException;

	beforeEach(async () => {
		subject = new ForbiddenException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should have `ForbiddenException`', () => {
			expect(subject.name).toStrictEqual('ForbiddenException');
		});
	});

	describe('message', () => {
		it('should return `Forbidden`', () => {
			expect(subject.message).toStrictEqual('Forbidden');
		});
	});

	describe('getStatus', () => {
		it('should return `403`', () => {
			expect(subject.getStatus()).toStrictEqual(403);
		});
	});

	describe('getResponse', () => {
		it('should return `Forbidden` by default', () => {
			expect(subject.getResponse()).toStrictEqual('Forbidden');
		});

		it('should return string with specified details', () => {
			subject = new ForbiddenException('not active');

			expect(subject.getResponse()).toStrictEqual('not active');
		});

		it('should have message specified in the constructor', () => {
			subject = new ForbiddenException('not active', 'user');

			expect(subject.getResponse()).toStrictEqual({ user: 'not active' });
		});
	});

	describe('stack', () => {
		it('should contain file and line of throw in stack property', () => {
			try {
				throw new ForbiddenException();
			} catch (error) {
				expect(error).toBeInstanceOf(ForbiddenException);
				expect((error as ForbiddenException).stack).toContain('forbidden.exception.spec.ts:53');
			}
		});
	});
});
