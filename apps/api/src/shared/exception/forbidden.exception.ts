import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class ForbiddenException extends BaseException {
	constructor(details?: string, origin?: string) {
		super('Forbidden', HttpStatus.FORBIDDEN, details, origin);
	}
}
