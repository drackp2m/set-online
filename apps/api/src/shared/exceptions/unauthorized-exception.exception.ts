import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class UnauthorizedException extends BaseException {
	constructor(response: string, dtoKey?: string) {
		super('Unauthorized', HttpStatus.UNAUTHORIZED, response, dtoKey);
	}
}
