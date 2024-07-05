import { Field, ID, ObjectType } from '@nestjs/graphql';

import { CachedPingStatus } from '../../definition/cached-ping-status.enum';
import { CachedPing as CachedPingInterface } from '../../definition/cached-ping.interface';
import { UserPingValue as UserPingValueInterface } from '../../definition/user-ping-value.interface';
import { UserPing as UserPingInterface } from '../../definition/user-ping.interface';

@ObjectType({ description: 'userPing' })
class UserPing implements UserPingInterface {
	@Field(() => CachedPingStatus)
	status!: CachedPingStatus;

	@Field()
	value!: number;
}

@ObjectType({ description: 'userPing' })
class UserPingValue implements UserPingValueInterface {
	@Field()
	value!: number;

	@Field()
	timestamp!: number;
}

@ObjectType({ description: 'cachedPing' })
class CachedPing implements CachedPingInterface {
	@Field(() => UserPing)
	average!: UserPing;

	@Field(() => [UserPingValue])
	values!: UserPingValue[];
}

@ObjectType({ description: 'getPingsOutput' })
export class GetPingsOutput {
	@Field(() => ID)
	userUuid!: string;

	@Field(() => CachedPing)
	ping!: CachedPing;

	constructor(data: GetPingsOutput) {
		Object.assign(this, data);
	}
}
