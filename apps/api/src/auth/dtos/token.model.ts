import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenModel {
	@Field()
	public token!: string;

	constructor(token?: Partial<TokenModel>) {
		Object.assign(this, token);
	}
}
