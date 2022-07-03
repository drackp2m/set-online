import { registerAs } from '@nestjs/config';
import { EnvJwtAlgorithm, processEnv } from '../utils/env-schema';

export interface JwtConfig {
	algorithm: EnvJwtAlgorithm;
	secret: string;
	issuer: string;
	audience: string,
	id: string;
	expiresIn: string;
}

export const jwtConfig = registerAs(
	'jwt',
	(): JwtConfig => ({
		algorithm: processEnv.JWT_ALGORITHM,
		secret: processEnv.JWT_SECRET,
		issuer: processEnv.JWT_ISSUER,
		audience: processEnv.JWT_AUDIENCE,
		id: processEnv.JWT_ID,
		expiresIn: processEnv.JWT_EXPIRES_IN,
	}),
);
