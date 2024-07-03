import { cpus } from 'os';

type Lock = {
	release: () => void;
};

type WaitingPromise = {
	resolve: (lock: Lock) => void;
	reject: (err?: Error) => void;
};

export class SemaphoreService {
	private running = 0;
	private waiting: WaitingPromise[] = [];
	private debugLogging = true;

	constructor(
		private label = '',
		public max = cpus().length,
	) {
		if (max < 1) {
			throw new Error(
				`The ${label} semaphore was created with a max value of ${max} but the max value cannot be less than 1`,
			);
		}
	}

	acquire = (): Promise<Lock> => {
		if (this.debugLogging) {
			console.log(
				`Lock requested for the ${this.label} resource - ${this.running} active, ${this.waiting.length} waiting`,
			);
		}

		if (this.running < this.max) {
			this.running++;

			return Promise.resolve({ release: this.release });
		}

		if (this.debugLogging) {
			console.log(
				`Max active locks hit for the ${this.label} resource - there are ${this.running} tasks running and ${this.waiting.length} waiting.`,
			);
		}

		return new Promise<Lock>((resolve, reject) => {
			this.waiting.push({ resolve, reject });
		});
	};

	purge = () => {
		if (this.debugLogging) {
			console.info(
				`Purge requested on the ${this.label} semaphore, ${this.waiting.length} pending tasks will be cancelled.`,
			);
		}

		this.waiting.forEach((task) => {
			task.reject(
				new Error('The semaphore was purged and as a result this task has been cancelled'),
			);
		});

		this.running = 0;
		this.waiting = [];
	};

	private take = () => {
		if (this.waiting.length > 0 && this.running < this.max) {
			this.running++;

			const task = this.waiting.shift();

			task?.resolve({ release: this.release });
		}
	};

	private release = () => {
		this.running--;
		this.take();
	};
}
