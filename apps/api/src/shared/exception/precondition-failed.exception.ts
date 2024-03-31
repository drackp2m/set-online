import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class PreconditionFailedException extends BaseException {
	constructor(details?: string, origin?: string) {
		super('Precondition failed', HttpStatus.PRECONDITION_FAILED, details, origin);
	}
}
