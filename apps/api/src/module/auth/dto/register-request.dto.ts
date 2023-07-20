import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

import { RegisterRequest } from '@set-online/api-definitions';

import { IsUniqueUserProp } from '../../user/decorator/is-unique-user-prop.decorator';

@InputType()
export class RegisterRequestDto implements RegisterRequest {
	@IsString()
	@IsUniqueUserProp('username')
	@Field()
	username!: string;

	@IsString()
	@Field()
	password!: string;

	@IsOptional()
	@IsEmail()
	@IsUniqueUserProp('email')
	@Field({ nullable: true })
	email?: string;
}
