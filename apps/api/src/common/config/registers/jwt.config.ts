import { registerAs } from '@nestjs/config';

import { validate } from '../../environment';
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
		tokenExpiresIn: config.JWT_TOKEN_EXPIRES_IN,
		refreshExpiresIn: config.JWT_TOKEN_EXPIRES_IN,
	}),
);
