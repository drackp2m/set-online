import { HttpException } from '@nestjs/common';

export class BaseException extends HttpException {
	constructor(message: string, httpCode: number, response?: string, dtoKey?: string) {
		const responseWithDtoKey = dtoKey ? { [dtoKey]: response } : response ?? message;

		super(responseWithDtoKey, httpCode);

		this.message = message;
	}
}
