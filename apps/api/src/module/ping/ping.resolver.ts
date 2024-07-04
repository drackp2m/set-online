import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { IntervalUseCase } from '../../shared/use-case/interval.use-case';
import { ProtectTo } from '../auth/decorator/protect-to.decorator';
import { CurrentUser } from '../user/decorator/current-user.decorator';
import { User } from '../user/user.entity';

import { SendPingInput } from './dto/input/send-ping.input';
import { GetPingsOutput } from './dto/output/get-pings.output';
import { GetPingsFromCacheUseCase } from './use-case/get-ping-from-cache.use-case';
import { PersistAndUpdateUserPingUseCase } from './use-case/persist-and-update-user-ping.use-case';

@Resolver()
export class PingResolver {
	private readonly SEND_PING_TOPIC = 'sendPing';
	private readonly pubSub = new PubSub();

	constructor(
		private readonly intervalUseCase: IntervalUseCase,
		private readonly persistUserPingUseCase: PersistAndUpdateUserPingUseCase,
		private readonly getPingsFromCacheUseCase: GetPingsFromCacheUseCase,
	) {
		this.intervalUseCase.on(this.SEND_PING_TOPIC, async () => {
			const pingsFromCache: GetPingsOutput[] = await this.getPingsFromCacheUseCase.execute();

			this.pubSub.publish(this.SEND_PING_TOPIC, pingsFromCache);
		});

		this.intervalUseCase.startInterval(5, this.SEND_PING_TOPIC);
	}

	@ProtectTo()
	@Mutation(() => Boolean, {
		name: 'sendPing',
	})
	async sendPing(
		@CurrentUser() user: User,
		@Args('input', { type: () => SendPingInput }) input: SendPingInput,
	): Promise<boolean> {
		await this.persistUserPingUseCase.execute(user.uuid, input.pingValue);

		return true;
	}

	@ProtectTo()
	@Subscription(() => [GetPingsOutput], {
		name: 'getPings',
		resolve: (payload, _variables, _context) => {
			const userUuid = _context.req.user.uuid;

			return payload[userUuid]?.average.value ?? 0;
		},
		filter(_payload, _variables, _context) {
			return true;
		},
	})
	getPings(): AsyncIterator<GetPingsOutput[]> {
		return this.pubSub.asyncIterator<GetPingsOutput[]>(this.SEND_PING_TOPIC);
	}
}
