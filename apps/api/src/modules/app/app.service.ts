import { Message } from '@set-online/api-definitions';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getData(): Message {
		return { message: 'Welcome to set-online!' };
	}
}
