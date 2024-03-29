import { Controller, Get, Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

import { AppService } from './app.service';

import { Message } from '@set-online/api-definitions';

@Controller('app')
export class AppController {
	constructor(
		@Inject('PUB_SUB') private readonly pubSub: PubSub,
		private readonly appService: AppService,
	) {}

	@Get('hello')
	getData(): Message {
		this.pubSub.publish('getManySubscription', 'Hello from hello');

		return this.appService.getData();
	}
}
