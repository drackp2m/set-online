import { UnauthorizedException } from './unauthorized-exception.exception';

describe('UnauthorizedException', () => {
	let subject: UnauthorizedException;

	beforeEach(async () => {
		subject = new UnauthorizedException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should have `UnauthorizedException`', () => {
			expect(subject.name).toStrictEqual('UnauthorizedException');
		});
	});

	describe('message', () => {
		it('should return `Unauthorized`', () => {
			expect(subject.message).toStrictEqual('Unauthorized');
		});
	});

	describe('getStatus', () => {
		it('should return `401`', () => {
			expect(subject.getStatus()).toStrictEqual(401);
		});
	});

	describe('getResponse', () => {
		it('should return `Unauthorized` by default', () => {
			expect(subject.getResponse()).toStrictEqual('Unauthorized');
		});

		it('should return string with specified details', () => {
			subject = new UnauthorizedException('access not granted');

			expect(subject.getResponse()).toStrictEqual('access not granted');
		});

		it('should return object with specified origin / details', () => {
			subject = new UnauthorizedException('access not granted', 'role');

			expect(subject.getResponse()).toStrictEqual({ role: 'access not granted' });
		});
	});

	describe('stack', () => {
		it('should contain file and line of throw in stack property', () => {
			try {
				throw new UnauthorizedException();
			} catch (error) {
				expect(error).toBeInstanceOf(UnauthorizedException);
				expect((error as UnauthorizedException).stack).toContain(
					'unauthorized-exception.exception.spec.ts:53',
				);
			}
		});
	});
});
