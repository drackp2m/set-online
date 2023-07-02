export interface JsonWebToken {
	sub: string;
	jti: string;
	iss: string;
	aud: string;
	iat: number;
	nbf: number;
	exp: number;
}
