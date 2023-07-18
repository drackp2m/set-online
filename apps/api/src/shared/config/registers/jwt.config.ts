import { registerAs } from '@nestjs/config';

import { validate } from '../../environment/env.validation';
import { JwtConfig } from '../types/jwt-config.type';

const config = validate(process.env);

export const jwtConfig = registerAs(
	'jwt',
	(): JwtConfig => ({
		algorithm: config.JWT_ALGORITHM,
		secret: config.JWT_SECRET,
		issuer: config.JWT_ISSUER,
		audience: config.JWT_AUDIENCE,
		id: config.JWT_ID,
		accessTokenExpiresIn: config.JWT_ACCESS_TOKEN_EXPIRES_IN,
		refreshTokenExpiresIn: config.JWT_REFRESH_TOKEN_EXPIRES_IN,
	}),
);
