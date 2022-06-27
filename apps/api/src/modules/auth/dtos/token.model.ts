import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class TokenModel {
  @Field()
  public token: string

  @Field()
  public expiresIn: string

	constructor(token?: Partial<TokenModel>) {
		Object.assign(this, token);
	}
}
