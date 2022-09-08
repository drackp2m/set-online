import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class BadRequestException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Bad request', HttpStatus.BAD_REQUEST, response, dtoKey);
	}
}
