import { registerEnumType } from '@nestjs/graphql';

export enum CachedPingStatus {
	good = 'good',
	fair = 'fair',
	bad = 'bad',
}

registerEnumType(CachedPingStatus, {
	name: 'CachedPingStatus',
});
