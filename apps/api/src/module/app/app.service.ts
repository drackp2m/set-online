import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { Message } from '@set-online/api-definitions';

@Injectable()
export class AppService {
	@Cron('42 * * * * *')
	async handleCron() {
		const response = await fetch('https://api.playsetonline.com');

		console.log(await response.text());
	}

	welcomeMessage(): Message {
		return { message: 'Welcome to set-online!' };
	}
}
