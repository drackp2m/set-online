import { HttpStatus } from '@nestjs/common';

import { BaseException } from './base.exception';

export class InternalServerErrorException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR, response, dtoKey);
	}
}
