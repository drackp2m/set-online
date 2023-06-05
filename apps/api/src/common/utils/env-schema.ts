import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

ConfigModule.forRoot({
	envFilePath: ['apps/api/.env.dev', 'apps/api/.env.prod'],
});

const [string, number] = [Joi.string(), Joi.number()];

const ENVIRONMENTS = ['production', 'development', 'test'] as const;
export type EnvEnvironment = (typeof ENVIRONMENTS)[number];

const PROTOCOLS = ['https', 'http'] as const;
export type EnvProtocol = (typeof PROTOCOLS)[number];

const JWT_ALGORITHMS = [
	'HS256',
	'HS384',
	'HS512',
	'RS256',
	'RS384',
	'RS512',
	'ES256',
	'ES384',
	'ES512',
	'PS256',
	'PS384',
	'PS512',
] as const;
export type EnvJwtAlgorithm = (typeof JWT_ALGORITHMS)[number];

export interface IEnvSchema {
	ENVIRONMENT: EnvEnvironment;
	API_PROTOCOL: EnvProtocol;
	API_DOMAIN: string;
	API_PREFIX: string;
	API_PORT: number;
	DB_HOST: string;
	DB_PORT: number;
	DB_NAME: string;
	DB_USER: string;
	DB_PASS: string;
	JWT_ALGORITHM: EnvJwtAlgorithm;
	JWT_SECRET: string;
	JWT_ISSUER: string;
	JWT_AUDIENCE: string;
	JWT_ID: string;
	JWT_TOKEN_EXPIRES_IN: string;
}

export const envSchema = Joi.object({
	ENVIRONMENT: string.valid(...ENVIRONMENTS),
	API_PROTOCOL: string.valid(...PROTOCOLS),
	API_DOMAIN: string,
	API_PREFIX: string.allow(''),
	API_PORT: number,
	DB_HOST: string,
	DB_PORT: number,
	DB_NAME: string,
	DB_USER: string,
	DB_PASS: string,
	JWT_ALGORITHM: string.valid(...JWT_ALGORITHMS),
	JWT_SECRET: string,
	JWT_ISSUER: string,
	JWT_AUDIENCE: string,
	JWT_ID: string,
	JWT_TOKEN_EXPIRES_IN: string,
}).unknown();

export const processEnv = envSchema.validate(process.env).value as IEnvSchema;
