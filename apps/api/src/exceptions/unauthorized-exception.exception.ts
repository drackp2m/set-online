import { BaseException } from './base.exception';

export class UnauthorizedException extends BaseException {
	constructor(response: string, dtoKey?: string) {
		super('Unauthorized', 401, response, dtoKey);
	}
}
