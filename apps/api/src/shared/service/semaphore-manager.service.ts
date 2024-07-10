import { Injectable } from '@nestjs/common';

import { SemaphoreNamespace } from '../definition/semaphore-namespace.enum';

import { SemaphoreService } from './semaphore.service';

@Injectable()
export class SemaphoreManagerService {
	private readonly defaultInstance = new SemaphoreService();
	private readonly instances: Map<string, SemaphoreService> = new Map();

	getInstance(config?: { name: SemaphoreNamespace }): SemaphoreService {
		if (config?.name === undefined) {
			return this.defaultInstance;
		}

		const existingInstance = this.instances.get(config.name);

		if (existingInstance === undefined) {
			const newInstance = new SemaphoreService();
			this.instances.set(config.name, newInstance);

			return newInstance;
		}

		return existingInstance;
	}
}
