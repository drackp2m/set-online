import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { NodeCacheService } from '../../shared/service/node-cache.service';

import { PingRequestDto } from './dto/request/ping-request.dto';

@Resolver()
export class PingResolver {
	constructor(private readonly nodeCacheService: NodeCacheService) {}

	@Mutation(() => String, {
		name: 'sendPing',
	})
	sendPing(@Args('input', { type: () => PingRequestDto }) input: PingRequestDto) {
		console.log(input);

		return 'null';
	}
}
