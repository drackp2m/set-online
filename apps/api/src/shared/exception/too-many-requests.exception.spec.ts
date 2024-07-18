import { TooManyRequestsException } from './too-many-requests.exception';

describe('TooManyRequestsException', () => {
	let subject: TooManyRequestsException;

	beforeEach(async () => {
		subject = new TooManyRequestsException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should have `TooManyRequestsException`', () => {
			expect(subject.name).toStrictEqual('TooManyRequestsException');
		});
	});

	describe('message', () => {
		it('should return `Too many requests`', () => {
			expect(subject.message).toStrictEqual('Too many requests');
		});
	});

	describe('getStatus', () => {
		it('should return `429`', () => {
			expect(subject.getStatus()).toStrictEqual(429);
		});
	});

	describe('getResponse', () => {
		it('should return `Too many requests` by default', () => {
			expect(subject.getResponse()).toStrictEqual('Too many requests');
		});

		it('should return string with specified details', () => {
			subject = new TooManyRequestsException('limit exceeded');

			expect(subject.getResponse()).toStrictEqual('limit exceeded');
		});

		it('should return object with specified origin / details', () => {
			subject = new TooManyRequestsException('limit exceeded', 'request');

			expect(subject.getResponse()).toStrictEqual({ request: 'limit exceeded' });
		});
	});

	describe('stack', () => {
		it('should contain file and line of throw in stack property', () => {
			try {
				throw new TooManyRequestsException();
			} catch (error) {
				expect(error).toBeInstanceOf(TooManyRequestsException);
				expect((error as TooManyRequestsException).stack).toContain(
					'too-many-requests.exception.spec.ts:53',
				);
			}
		});
	});
});
