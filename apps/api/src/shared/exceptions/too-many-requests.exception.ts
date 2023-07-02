import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class TooManyRequestsExcelption extends BaseException {
	constructor(response: string, dtoKey?: string) {
		super('Too many requests', HttpStatus.TOO_MANY_REQUESTS, response, dtoKey);
	}
}
