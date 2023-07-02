import { LoginRequest, RegisterRequest, UserEntity } from '@set-online/api-definitions';

export type AuthPost = {
	'/register': {
		payload: [RegisterRequest];
		response: UserEntity;
	};
	'/login': {
		payload: [LoginRequest];
		response: void;
	};
};
