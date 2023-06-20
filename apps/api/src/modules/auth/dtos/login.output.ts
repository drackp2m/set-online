import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginOutput {
	@Field()
	result: boolean;

	@Field()
	message: string;

	constructor(token: LoginOutput) {
		Object.assign(this, token);
	}
}
