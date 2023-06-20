import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

import { IsUniqueUserProp } from '../decorators';

@InputType()
export class CreateUserInput {
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
