import { IsDefined, IsString } from 'class-validator';

export class LoginRequestDto {
	@IsDefined()
	@IsString()
	username: string;

	@IsDefined()
	@IsString()
	password: string;
}
