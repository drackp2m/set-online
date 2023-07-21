import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class ForbiddenException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Forbidden', HttpStatus.FORBIDDEN, response, dtoKey);
	}
}
