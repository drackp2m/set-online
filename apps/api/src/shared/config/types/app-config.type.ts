import { ApiProtocol, NodeEnv } from '../../environment';

export type AppConfig = {
	environment: NodeEnv;
	protocol: ApiProtocol;
	domain: string;
	prefix: string;
	port: number;
};
