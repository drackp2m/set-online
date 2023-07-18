import { JwtAlgorithm } from '../../environment/jwt-algorithm.type';

export type JwtConfig = {
	algorithm: JwtAlgorithm;
	secret: string;
	issuer: string;
	audience: string;
	id: string;
	accessTokenExpiresIn: string;
	refreshTokenExpiresIn: string;
};
