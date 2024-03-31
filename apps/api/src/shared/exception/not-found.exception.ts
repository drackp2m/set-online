import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
	constructor(details?: string, origin?: string) {
		super('Not found', HttpStatus.NOT_FOUND, details, origin);
	}
}
