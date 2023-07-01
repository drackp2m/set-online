import { LoginRequest } from '@set-online/api-definitions';

import { IsDefined, IsString } from 'class-validator';

export class LoginRequestDto implements LoginRequest {
	@IsDefined()
	@IsString()
	username: string;

	@IsDefined()
	@IsString()
	password: string;
}
