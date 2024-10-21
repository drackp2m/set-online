import { Controller, Get, Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

import { Message } from '@set-online/api-definitions';

import { AppService } from './app.service';

@Controller('')
export class AppController {
	constructor(
		@Inject('PUB_SUB') private readonly pubSub: PubSub,
		private readonly appService: AppService,
	) {}

	@Get('api')
	api(): string {
		return this.root();
	}

	@Get('')
	root(): string {
		const now = new Date().toISOString();

		return `Api online at ${now}`;
	}

	@Get('hello')
	getData(): Message {
		this.pubSub.publish('getManySubscription', 'Hello from hello');

		return this.appService.welcomeMessage();
	}
}
