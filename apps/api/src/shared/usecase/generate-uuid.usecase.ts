import { randomUUID } from 'crypto';

export class GenerateUuidUsecase {
	static execute(): string {
		return randomUUID();
	}
}
