import { PreconditionFailedException } from './precondition-failed.exception';

describe('PreconditionFailedException', () => {
	let subject: PreconditionFailedException;

	beforeEach(async () => {
		subject = new PreconditionFailedException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should have `PreconditionFailedException`', () => {
			expect(subject.name).toStrictEqual('PreconditionFailedException');
		});
	});

	describe('message', () => {
		it('should return `Precondition failed`', () => {
			expect(subject.message).toStrictEqual('Precondition failed');
		});
	});

	describe('getStatus', () => {
		it('should return `412`', () => {
			expect(subject.getStatus()).toStrictEqual(412);
		});
	});

	describe('getResponse', () => {
		it('should return `Precondition failed` by default', () => {
			expect(subject.getResponse()).toStrictEqual('Precondition failed');
		});

		it('should return string with specified details', () => {
			subject = new PreconditionFailedException('is expired');

			expect(subject.getResponse()).toStrictEqual('is expired');
		});

		it('should return object with specified origin / details', () => {
			subject = new PreconditionFailedException('is expired', 'game');

			expect(subject.getResponse()).toStrictEqual({ game: 'is expired' });
		});
	});

	describe('stack', () => {
		it('should contain file and line of throw in stack property', () => {
			try {
				throw new PreconditionFailedException();
			} catch (error) {
				expect(error).toBeInstanceOf(PreconditionFailedException);
				expect((error as PreconditionFailedException).stack).toContain(
					'precondition-failed.exception.spec.ts:53',
				);
			}
		});
	});
});
