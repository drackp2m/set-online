import { ApiProtocol } from '../../environment/api-protocol.type';
import { NodeEnv } from '../../environment/node-env.type';

export type AppConfig = {
	environment: NodeEnv;
	protocol: ApiProtocol;
	domain: string;
	prefix: string;
	port: number;
};
