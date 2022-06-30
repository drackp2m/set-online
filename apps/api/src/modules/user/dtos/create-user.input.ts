import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsEmail, IsOptional, IsString } from 'class-validator';
import { IsUniqueUserProp } from '../../../decorators/validators/is-unique-user-prop.decorator';

@InputType()
export class CreateUserInput {
	@IsDefined()
	@IsString()
	@IsUniqueUserProp('username')
	@Field()
	public username!: string;

	@IsDefined()
	@IsString()
	@Field()
	public password!: string;

	@IsOptional()
	@IsEmail()
	@IsUniqueUserProp('email')
	@Field({ nullable: true })
	public email?: string;
}
