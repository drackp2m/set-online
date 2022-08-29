import { BaseException } from './base.exception';

export class BadRequestException extends BaseException {
	constructor(response?: string, dtoKey?: string) {
		super('Bad request', 400, response, dtoKey);
	}
}
