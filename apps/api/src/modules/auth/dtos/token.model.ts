import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenModel {
	@Field()
	public token: string;

	constructor(token: TokenModel) {
		Object.assign(this, token);
	}
}
