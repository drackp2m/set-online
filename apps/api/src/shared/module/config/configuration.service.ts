import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ApiConfig } from './definition/api-config.type';
import { DatabaseConfig } from './definition/database-config.type';
import { JwtConfig } from './definition/jwt-config.type';
import { NodeCacheConfig } from './definition/node-cache-config.type';

@Injectable()
export class ConfigurationService {
	constructor(private readonly configService: ConfigService) {}

	get database(): DatabaseConfig {
		return this.configService.get<DatabaseConfig>('database', { infer: true });
	}

	get api(): ApiConfig {
		return this.configService.get<ApiConfig>('api', { infer: true });
	}

	get jwt(): JwtConfig {
		return this.configService.get<JwtConfig>('jwt', { infer: true });
	}

	get nodeCache(): NodeCacheConfig {
		return this.configService.get<NodeCacheConfig>('nodeCache', { infer: true });
	}
}
