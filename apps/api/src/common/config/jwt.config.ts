import { registerAs } from '@nestjs/config';

import { JwtAlgorithm } from '../environment';
import { validate } from '../utils';

const config = validate(process.env);

export interface JwtConfig {
	algorithm: JwtAlgorithm;
	secret: string;
	issuer: string;
	audience: string;
	id: string;
	tokenExpiresIn: string;
	refreshExpiresIn: string;
}

export const jwtConfig = registerAs(
	'jwt',
	(): JwtConfig => ({
		algorithm: config.JWT_ALGORITHM,
		secret: config.JWT_SECRET,
		issuer: config.JWT_ISSUER,
		audience: config.JWT_AUDIENCE,
		id: config.JWT_ID,
		tokenExpiresIn: config.JWT_TOKEN_EXPIRES_IN,
		refreshExpiresIn: config.JWT_TOKEN_EXPIRES_IN,
	}),
);
