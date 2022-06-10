import * as Joi from 'joi';

const [string, number] = [Joi.string(), Joi.number()];

export const envSchema = Joi.object({
	NODE_ENV: string
		.valid('development', 'production', 'test')
		.default('development'),
  API_PORT: number,
	DB_HOST: string,
	DB_PORT: number,
	DB_NAME: string,
	DB_USER: string,
	DB_PASS: string,
});
