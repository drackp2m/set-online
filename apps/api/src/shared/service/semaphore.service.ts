export class SemaphoreService {
	private busy = false;
	private queue: (() => void)[] = [];

	async acquire(): Promise<void> {
		if (this.busy === true) {
			return new Promise((resolve) => this.queue.push(resolve));
		}

		this.busy = true;
	}

	release(): void {
		const nextResolve = this.queue.shift();

		if (nextResolve !== undefined) {
			nextResolve();
		} else {
			this.busy = false;
		}
	}
}
