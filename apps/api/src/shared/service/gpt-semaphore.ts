export class SemaphoreService {
	private semaphore = false;
	private queue: (() => void)[] = [];

	async acquire(): Promise<void> {
		if (this.semaphore === true) {
			return new Promise((resolve) => this.queue.push(resolve));
		}

		this.semaphore = true;
	}

	release(): void {
		const nextResolve = this.queue.shift();

		if (nextResolve !== undefined) {
			nextResolve();
		} else {
			this.semaphore = false;
		}
	}
}
