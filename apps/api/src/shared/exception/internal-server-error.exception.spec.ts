import { InternalServerErrorException } from './internal-server-error.exception';

describe('InternalServerErrorException', () => {
	let subject: InternalServerErrorException;

	beforeEach(async () => {
		subject = new InternalServerErrorException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should have `InternalServerErrorException`', () => {
			expect(subject.name).toStrictEqual('InternalServerErrorException');
		});
	});

	describe('message', () => {
		it('should return `Internal server error`', () => {
			expect(subject.message).toStrictEqual('Internal server error');
		});
	});

	describe('getStatus', () => {
		it('should return `500`', () => {
			expect(subject.getStatus()).toStrictEqual(500);
		});
	});

	describe('getResponse', () => {
		it('should return `Internal server error` by default', () => {
			expect(subject.getResponse()).toStrictEqual('Internal server error');
		});

		it('should return string with specified details', () => {
			subject = new InternalServerErrorException('unable to connect');

			expect(subject.getResponse()).toStrictEqual('unable to connect');
		});

		it('should have message specified in the constructor', () => {
			subject = new InternalServerErrorException('unable to connect', 'db');

			expect(subject.getResponse()).toStrictEqual({ db: 'unable to connect' });
		});
	});

	describe('stack', () => {
		it('should contain file and line of throw in stack property', () => {
			try {
				throw new InternalServerErrorException();
			} catch (error) {
				expect(error).toBeInstanceOf(InternalServerErrorException);
				expect((error as InternalServerErrorException).stack).toContain(
					'internal-server-error.exception.spec.ts:53',
				);
			}
		});
	});
});
