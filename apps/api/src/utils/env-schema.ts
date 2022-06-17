import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

ConfigModule.forRoot({
	envFilePath: ['apps/api/.env.development', 'apps/api/.env.production'],
});

const [string, number] = [Joi.string(), Joi.number()];

export interface IEnvSchema {
	ENVIRONMENT: 'production' | 'development' | 'test';
	API_PROTOCOL: 'https' | 'http';
	API_DOMAIN: string;
	API_PREFIX: string;
	API_PORT: number;
	DB_HOST: string;
	DB_PORT: number;
	DB_NAME: string;
	DB_USER: string;
	DB_PASS: string;
}

export const envSchema = Joi.object({
	ENVIRONMENT: string.valid('production', 'development', 'test'),
	API_PROTOCOL: string.valid('https', 'http'),
	API_DOMAIN: string,
	API_PREFIX: string.allow(''),
	API_PORT: number,
	DB_HOST: string,
	DB_PORT: number,
	DB_NAME: string,
	DB_USER: string,
	DB_PASS: string,
}).unknown();

export const processEnv = envSchema.validate(process.env).value as IEnvSchema;
