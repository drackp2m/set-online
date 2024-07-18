import { BadRequestException } from '@nestjs/common';

describe('BadRequestException', () => {
	let subject: BadRequestException;

	beforeEach(async () => {
		subject = new BadRequestException();
	});

	it('should be defined', () => {
		expect(subject).toBeDefined();
	});

	it('should have `Bad Request` message by default', () => {
		expect(subject.message).toStrictEqual('Bad Request');
	});

	it('should have message specified in the constructor', () => {
		subject = new BadRequestException('Custom error message');

		expect(subject.message).toStrictEqual('Custom error message');
	});

	it('should have `BadRequestException` name', () => {
		expect(subject.name).toStrictEqual('BadRequestException');
	});

	it('should contain file and line of throw in stack property', () => {
		try {
			throw new BadRequestException('Foo');
		} catch (error) {
			expect(error).toBeInstanceOf(BadRequestException);
			expect((error as BadRequestException).stack).toContain('bad-request.exception.spec.ts:30');
		}
	});
});
