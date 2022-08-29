import { BaseException } from './base.exception';

export class NotFoundException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Not found', 404, response, dtoKey);
	}
}
