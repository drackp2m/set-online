import { Message } from '@set-online/api-definitions';

export interface DefaultGet {
	'/hello': {
		response: Message;
	};
}
