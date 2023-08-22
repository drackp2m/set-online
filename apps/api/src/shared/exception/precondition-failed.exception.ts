import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class PreconditionFailedException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Precondition failed', HttpStatus.PRECONDITION_FAILED, response, dtoKey);
	}
}
