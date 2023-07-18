import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

import { ApiProtocol } from './api-protocol.type';
import { JwtAlgorithm } from './jwt-algorithm.type';
import { NodeEnv } from './node-env.type';

class EnvironmentVariables {
	@IsString()
	@IsNotEmpty()
	NODE_ENV: NodeEnv;

	@IsString()
	@IsNotEmpty()
	DB_HOST: string;

	@IsNumber()
	DB_PORT: number;

	@IsString()
	@IsNotEmpty()
	DB_NAME: string;

	@IsString()
	@IsNotEmpty()
	DB_USER: string;

	@IsString()
	@IsNotEmpty()
	DB_PASS: string;

	@IsString()
	@IsNotEmpty()
	API_PROTOCOL: ApiProtocol;

	@IsString()
	@IsNotEmpty()
	API_DOMAIN: string;

	@IsNumber()
	API_PORT: number;

	@IsString()
	@IsNotEmpty()
	API_PREFIX: string;

	@IsNumber()
	API_DEBUG_PORT: number;

	@IsNumber()
	APP_PORT: number;

	@IsString()
	@IsNotEmpty()
	JWT_ID: string;

	@IsString()
	@IsNotEmpty()
	JWT_ALGORITHM: JwtAlgorithm;

	@IsString()
	@IsNotEmpty()
	JWT_ISSUER: string;

	@IsString()
	@IsNotEmpty()
	JWT_AUDIENCE: string;

	@IsString()
	@IsNotEmpty()
	JWT_ACCESS_TOKEN_EXPIRES_IN: string;

	@IsString()
	@IsNotEmpty()
	JWT_REFRESH_TOKEN_EXPIRES_IN: string;

	@IsString()
	@IsNotEmpty()
	JWT_SECRET: string;
}

export function validate(config: Record<string, unknown>) {
	const validatedConfig = plainToInstance(EnvironmentVariables, config, {
		enableImplicitConversion: true,
	});

	const errors = validateSync(validatedConfig, {
		skipMissingProperties: false,
	});

	if (errors.length > 0) {
		throw new Error(errors.toString());
	}

	return validatedConfig;
}
