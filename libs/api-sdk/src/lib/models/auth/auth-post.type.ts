import { LoginRequest, RegisterRequest, User } from '@set-online/api-definitions';

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
