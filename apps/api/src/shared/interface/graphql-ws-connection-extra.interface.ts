export interface GraphqlWsConnectionExtraInterface {
	socket: Socket;
	request: Request;
}

interface Request {
	socket: Client;
	httpVersionMajor: number;
	httpVersionMinor: number;
	httpVersion: string;
	complete: boolean;
	rawHeaders: string[];
	rawTrailers: unknown[];
	joinDuplicateHeaders: null;
	aborted: boolean;
	upgrade: boolean;
	url: string;
	method: string;
	statusCode: null;
	statusMessage: null;
	client: Client;
	parser: null;
}

interface Client {
	secureConnecting: boolean;
	servername: string;
	alpnProtocol: string;
	authorized: boolean;
	authorizationError: null;
	encrypted: boolean;
	connecting: boolean;
	allowHalfOpen: boolean;
	timeout: number;
	parser: null;
}

interface Socket {
	socket: Client;
}
