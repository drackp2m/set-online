declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: string;

			DB_HOST: string;
			DB_PORT: string;
			DB_USER: string;
			DB_PASS: string;
			DB_NAME: string;
			DB_NAME_TEST: string;

			API_PROTOCOL: string;
			API_DOMAIN: string;
			API_PORT: string;
			API_PREFIX: string;
			API_DEBUG_PORT: string;
			API_COOKIE_SECRET: string;

			APP_PORT: string;

			JWT_ID: string;
			JWT_ALGORITHM: string;
			JWT_ISSUER: string;
			JWT_AUDIENCE: string;
			JWT_ACCESS_TOKEN_EXPIRES_IN: string;
			JWT_REFRESH_TOKEN_EXPIRES_IN: string;
			JWT_SECRET: string;
		}
	}
}

export { NodeJS };
