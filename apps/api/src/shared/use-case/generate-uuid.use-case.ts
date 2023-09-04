import { randomUUID } from 'crypto';

export class GenerateUuidUseCase {
	execute(): string {
		return randomUUID();
	}
}
