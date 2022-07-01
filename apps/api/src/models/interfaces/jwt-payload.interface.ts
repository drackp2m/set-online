export interface JwtPayloadInterface {
	nbf: number;
	exp: number;
	aud: string;
	iss: string;
	sub: string;
	jti: string;
}
