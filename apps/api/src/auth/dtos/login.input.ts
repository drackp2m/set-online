import { Field, InputType } from '@nestjs/graphql';

import { IsDefined, IsString } from 'class-validator';

@InputType()
export class LoginInput {
	@IsDefined()
	@IsString()
	@Field()
	public username!: string;

	@IsDefined()
	@IsString()
	@Field()
	public password!: string;
}
