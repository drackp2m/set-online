import { Field, ID, ObjectType } from '@nestjs/graphql';

import { CachedPing as CachedPingInterface } from '../../definition/cached-ping.interface';
import { UserPingValue } from '../../definition/user-ping-value.interface';
import { UserPing } from '../../definition/user-ping.interface';

@ObjectType({ description: 'getPings' })
export class GetPingsOutput {
	@Field(() => ID)
	userUuid!: string;

	@Field(() => [CachedPing])
	ping!: CachedPing;

	constructor(data: GetPingsOutput) {
		Object.assign(this, data);
	}
}

class CachedPing implements CachedPingInterface {
	average!: UserPing;
	values!: UserPingValue[];
}
