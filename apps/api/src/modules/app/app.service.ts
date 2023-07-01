import { Injectable } from '@nestjs/common';

import { Message } from '@set-online/api-definitions';

@Injectable()
export class AppService {
	getData(): Message {
		return { message: 'Welcome to set-online!' };
	}
}
