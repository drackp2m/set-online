import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class BcryptService {
	async generatePassword(string: string): Promise<string> {
		const salt = await bcryptjs.genSalt(12);

		return await bcryptjs.hash(string, salt);
	}

	compare(string: string, hash: string): Promise<boolean> {
		return bcryptjs.compare(string, hash);
	}
}
