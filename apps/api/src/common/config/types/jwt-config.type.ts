import { JwtAlgorithm } from '../../environment';

export type JwtConfig = {
	algorithm: JwtAlgorithm;
	secret: string;
	issuer: string;
	audience: string;
	id: string;
	tokenExpiresIn: string;
	refreshExpiresIn: string;
};
