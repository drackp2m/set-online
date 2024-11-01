import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { RegisterRequest } from '@playsetonline/api-definitions';

import { IsUniqueUserProp } from '../../user/decorator/is-unique-user-prop.decorator';

@InputType()
export class RegisterRequestDto implements RegisterRequest {
	@IsString()
	@IsNotEmpty()
	@IsUniqueUserProp('username')
	@Field()
	username!: string;

	@IsString()
	@IsNotEmpty()
	@Field()
	password!: string;

	@IsOptional()
	@IsEmail()
	@IsUniqueUserProp('email')
	@Field({ nullable: true })
	email?: string;
}
