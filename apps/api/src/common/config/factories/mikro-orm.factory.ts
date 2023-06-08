import { Connection, IDatabaseDriver } from '@mikro-orm/core';
import {
	MikroOrmModuleOptions,
	MikroOrmOptionsFactory,
} from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';

import mikroOrmConfig from '../mikro-orm.config';

@Injectable()
export class MikroOrmFactory implements MikroOrmOptionsFactory {
	createMikroOrmOptions(
		_contextName?: string,
	): Promise<MikroOrmModuleOptions<IDatabaseDriver<Connection>>> {
		return mikroOrmConfig();
	}
}
