export interface JwtPayloadInterface {
	iss: string;
	aud: string;
	jti: string;
	iat: number;
	nbf: number;
	exp: number;
	sub: string;
}
