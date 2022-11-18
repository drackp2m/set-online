import { Args, Query, Resolver } from '@nestjs/graphql';

import { AuthService } from '.';

import { LoginInput, TokenModel } from './dtos';

@Resolver()
export class AuthResolver {
	public constructor(private readonly authService: AuthService) {}

	@Query(() => TokenModel)
	public async login(
		@Args('input', {
			type: () => LoginInput,
		})
		loginInput: LoginInput,
	): Promise<TokenModel> {
		return this.authService.login(loginInput);
	}
}
