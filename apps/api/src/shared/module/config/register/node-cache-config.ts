import { registerAs } from '@nestjs/config';

import { validate } from '../../../environment/env.validation';
import { NodeCacheConfig } from '../definition/node-cache-config.type';

const config = validate(process.env);

export const nodeCacheConfig = registerAs(
	'nodeCache',
	(): NodeCacheConfig => ({
		pingPrefix: config.API_NODE_CACHE_PING_PREFIX,
	}),
);
