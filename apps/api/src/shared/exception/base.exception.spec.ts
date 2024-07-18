import { BaseException } from './base.exception';

describe('BaseException', () => {
	let subject: BaseException;

	beforeEach(async () => {
		subject = new BaseException("I'm a teapot", 418);
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	describe('name', () => {
		it('should return `BaseException`', () => {
			expect(subject.name).toStrictEqual('BaseException');
		});
	});

	describe('message', () => {
		it("should return `I'm a teapot`", () => {
			expect(subject.message).toStrictEqual("I'm a teapot");
		});
	});

	describe('getStatus', () => {
		it('should return `418`', () => {
			expect(subject.getStatus()).toStrictEqual(418);
		});
	});

	describe('getResponse', () => {
		it("should return `I'm a teapot` by default", () => {
			expect(subject.getResponse()).toStrictEqual("I'm a teapot");
		});

		it('should return string with specified details', () => {
			subject = new BaseException('I am not a puppet', 422);

			expect(subject.getResponse()).toStrictEqual('I am not a puppet');
		});
	});

	describe('stack', () => {
		it('should contain file and line where he has been thrown', () => {
			try {
				throw new BaseException('I am a real boy', 428);
			} catch (error) {
				expect(error).toBeInstanceOf(BaseException);
				expect((error as BaseException).stack).toContain('base.exception.spec.ts:47');
			}
		});
	});
});
