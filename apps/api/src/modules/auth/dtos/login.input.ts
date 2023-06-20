import { Field, InputType } from '@nestjs/graphql';
import { IsDefined, IsString } from 'class-validator';

@InputType()
export class LoginInput {
	@IsDefined()
	@IsString()
	@Field()
	username!: string;

	@IsDefined()
	@IsString()
	@Field()
	password!: string;
}
