import { Injectable } from '@nestjs/common';

@Injectable()
export class FuckingFuck {
	fuck(result: number): string {
		return result.toString();
	}
}

@Injectable()
export class FuckUseCase {
	constructor(private readonly fuckingFuck: FuckingFuck) {}

	execute(payload: number) {
		return this.fuckingFuck.fuck(payload);
	}
}
