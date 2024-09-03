import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { Message } from '@set-online/api-definitions';

import { ConfigurationService } from '../../shared/module/config/configuration.service';

@Injectable()
export class AppService {
	constructor(private readonly configService: ConfigurationService) {}

	@Cron('42 * * * * *')
	async handleCron() {
		const apiConfig = this.configService.api;
		const port =
			apiConfig.environment === 'production' && apiConfig.port ? `:${apiConfig.port}` : '';
		const apiBaseUrl = `${apiConfig.protocol}://${apiConfig.domain}${port}`;

		const response = await fetch(apiBaseUrl);

		console.log(await response.text());
	}

	welcomeMessage(): Message {
		return { message: 'Welcome to set-online!' };
	}
}
