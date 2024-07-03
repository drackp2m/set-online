import { CachedPingStatus } from './cached-ping-status.enum';

export interface UserPing {
	status: CachedPingStatus;
	value: number;
}
