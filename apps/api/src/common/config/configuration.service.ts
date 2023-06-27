import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppConfig } from './types/app-config.type';
import { DatabaseConfig } from './types/database-config.type';
import { JwtConfig } from './types/jwt-config.type';

@Injectable()
export class ConfigurationService {
	constructor(private readonly configService: ConfigService) {}

	app: AppConfig = this.configService.get<AppConfig>('app', { infer: true });

	database: DatabaseConfig = this.configService.get<DatabaseConfig>('database', { infer: true });

	jwt: JwtConfig = this.configService.get<JwtConfig>('jwt', { infer: true });
}
