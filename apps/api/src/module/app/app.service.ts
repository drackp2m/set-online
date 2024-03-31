import { Injectable } from '@nestjs/common';

import { Message } from '@set-online/api-definitions';

@Injectable()
export class AppService {
	welcomeMessage(): Message {
		return { message: 'Welcome to set-online!' };
	}
}
