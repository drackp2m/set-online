import { IsDefined, IsString } from 'class-validator';

import { LoginRequest } from '@set-online/api-definitions';

export class LoginRequestDto implements LoginRequest {
	@IsDefined()
	@IsString()
	username: string;

	@IsDefined()
	@IsString()
	password: string;
}
