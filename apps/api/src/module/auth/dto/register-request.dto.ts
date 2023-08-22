import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { RegisterRequest } from '@set-online/api-definitions';

@InputType()
export class RegisterRequestDto implements RegisterRequest {
	@IsString()
	@IsNotEmpty()
	@Field()
	username: string;

	@IsString()
	@IsNotEmpty()
	@Field()
	password: string;

	@IsOptional()
	@IsEmail()
	@Field({ nullable: true })
	email?: string;
}
