import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEmail, IsOptional, IsString } from 'class-validator';
import { IsUniqueUsername } from '../../../decorators/is-unique-username.decorator';

@InputType()
export class CreateUserInput {
	@IsDefined()
	@IsString()
	@IsUniqueUsername()
	@Field()
	public username!: string;

	@IsDefined()
	@IsString()
	@Field()
	public password!: string;

	@IsOptional()
	@IsEmail()
	@Field({ nullable: true })
	public email?: string;
}
