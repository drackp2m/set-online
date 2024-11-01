import { LoginRequest, RegisterRequest, User } from '@playsetonline/api-definitions';

export type AuthPost = {
	'/register': {
		payload: [RegisterRequest];
		response: User;
	};
	'/login': {
		payload: [LoginRequest];
		response: void;
	};
};
