import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { NodeCacheService } from '../../shared/service/node-cache.service';

import { SendPingInput } from './dto/input/send-ping.input';

@Resolver()
export class PingResolver {
	constructor(private readonly nodeCacheService: NodeCacheService) {}

	@Mutation(() => String, {
		name: 'sendPing',
	})
	sendPing(@Args('input', { type: () => SendPingInput }) input: SendPingInput): string {
		console.log(input);

		return 'null';
	}
}
