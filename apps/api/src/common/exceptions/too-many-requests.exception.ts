import { BaseException } from './base.exception';

export class TooManyRequestsExcelption extends BaseException {
	constructor(response: string, dtoKey?: string) {
		super('Too many requests', 429, response, dtoKey);
	}
}
