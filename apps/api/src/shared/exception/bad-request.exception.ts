import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class BadRequestException extends BaseException {
	constructor(details?: string, origin?: string) {
		super('Bad request', HttpStatus.BAD_REQUEST, details, origin);
	}
}
