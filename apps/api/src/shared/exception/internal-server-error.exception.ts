import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class InternalServerErrorException extends BaseException {
	constructor(details?: string, origin?: string) {
		super('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR, details, origin);
	}
}
