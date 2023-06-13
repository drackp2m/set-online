import { Message } from '@set-online/api-interfaces';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getData(): Message {
		return { message: 'Welcome to set-online!' };
	}
}
