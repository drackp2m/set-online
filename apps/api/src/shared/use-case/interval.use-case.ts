import { EventEmitter } from 'events';

import { Injectable, OnModuleDestroy } from '@nestjs/common';

@Injectable()
export class IntervalUseCase extends EventEmitter implements OnModuleDestroy {
	private intervalId?: NodeJS.Timeout;

	onModuleDestroy() {
		this.clearInterval();
	}

	startInterval(seconds: number, name = 'interval') {
		if (this.intervalId !== undefined) {
			return;
		}

		this.intervalId = setInterval(() => {
			this.emit(name);
		}, seconds * 1000);
	}

	private clearInterval() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
		}
	}
}
