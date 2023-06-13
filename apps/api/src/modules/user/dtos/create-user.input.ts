import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

import { IsUniqueUserProp } from '../decorators';

@InputType()
export class CreateUserInput {
	@IsString()
	@IsUniqueUserProp('username')
	@Field()
	public username!: string;

	@IsString()
	@Field()
	public password!: string;

	@IsOptional()
	@IsEmail()
	@IsUniqueUserProp('email')
	@Field({ nullable: true })
	public email?: string;
}
