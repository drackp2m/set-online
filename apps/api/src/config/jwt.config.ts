import { registerAs } from '@nestjs/config';
import { EnvJwtAlgorithm, processEnv } from '../utils/env-schema';

export interface JwtConfig {
	id: string;
	algorithm: EnvJwtAlgorithm;
	secret: string;
	expiresIn: string;
}

export const jwtConfig = registerAs(
	'jwt',
	(): JwtConfig => ({
		id: processEnv.JWT_ID,
		algorithm: processEnv.JWT_ALGORITHM,
		secret: processEnv.JWT_SECRET,
		expiresIn: processEnv.JWT_EXPIRES_IN,
	}),
);
