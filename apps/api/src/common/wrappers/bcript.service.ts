import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class BcryptService {
	genSalt(rounds?: number): Promise<string> {
		return bcryptjs.genSalt(rounds);
	}

	hash(string: string, salt: string): Promise<string> {
		return bcryptjs.hash(string, salt);
	}

	compare(string: string, hash: string): Promise<boolean> {
		return bcryptjs.compare(string, hash);
	}
}
