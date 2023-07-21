import { Controller, Get, Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

import { Message } from '@set-online/api-definitions';

import { AppService } from './app.service';

@Controller('app')
export class AppController {
	constructor(
		private readonly appService: AppService,
		@Inject('PUB_SUB') private readonly pubSub: PubSub,
	) {}

	@Get('hello')
	getData(): Message {
		console.log('hello');

		this.pubSub.publish('getManySubscription', 'Hello from hello');

		return this.appService.getData();
	}
}
