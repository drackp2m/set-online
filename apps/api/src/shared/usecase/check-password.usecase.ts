import { compare } from 'bcryptjs';

export class CheckPasswordUsecase {
	async execute(password: string, hashedPassword: string): Promise<boolean> {
		return await compare(password, hashedPassword);
	}
}
