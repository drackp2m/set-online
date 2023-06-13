import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Not found', HttpStatus.NOT_FOUND, response, dtoKey);
	}
}
