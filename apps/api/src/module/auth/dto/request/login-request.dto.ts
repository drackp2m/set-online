import { IsNotEmpty, IsString } from 'class-validator';

import { LoginRequest } from '@playsetonline/api-definitions';

export class LoginRequestDto implements LoginRequest {
	@IsString()
	@IsNotEmpty()
	username!: string;

	@IsString()
	@IsNotEmpty()
	password!: string;
}
