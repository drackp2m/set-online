import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class TooManyRequestsException extends BaseException {
	constructor(details?: string, origin?: string) {
		super('Too many requests', HttpStatus.TOO_MANY_REQUESTS, details, origin);
	}
}
