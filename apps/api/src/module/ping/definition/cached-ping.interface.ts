import { UserPingValue } from './user-ping-value.interface';
import { UserPing } from './user-ping.interface';

export interface CachedPing {
	average: UserPing;
	values: UserPingValue[];
}
