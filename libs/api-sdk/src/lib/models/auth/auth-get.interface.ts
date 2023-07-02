export interface AuthGet {
	'/refresh-session': {
		response: void;
	};
	'/logout': {
		response: void;
	};
}
