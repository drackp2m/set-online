export interface JwtInterface {
	iss: string;
	sub: { uuid: string };
	exp: number;
	nbf: number;
	iat: number;
	jti: string;
}
