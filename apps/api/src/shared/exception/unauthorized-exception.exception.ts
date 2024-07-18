import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class UnauthorizedException extends BaseException {
	constructor(details?: string, origin?: string) {
		super('Unauthorized', HttpStatus.UNAUTHORIZED, details, origin);
	}
}
