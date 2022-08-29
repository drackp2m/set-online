import { BaseException } from './base.exception';

export class ForbiddenException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Forbidden', 403, response, dtoKey);
	}
}
