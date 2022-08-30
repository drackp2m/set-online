import { Args, Query, Resolver } from '@nestjs/graphql';

import { AuthService } from './auth.service';
import { LoginInput } from './dtos/login.input';
import { TokenModel } from './dtos/token.model';

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
