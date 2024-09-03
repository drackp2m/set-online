import { genSalt, hash } from 'bcryptjs';

export class HashPasswordUseCase {
	async execute(password: string): Promise<string> {
		const salt = await genSalt(12);

		return hash(password, salt);
	}
}
