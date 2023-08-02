import { randomUUID } from 'crypto';

export class GenerateUuidUseCase {
	static execute(): string {
		return randomUUID();
	}
}
