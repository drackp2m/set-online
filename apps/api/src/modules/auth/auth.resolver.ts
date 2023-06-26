import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { LoginInput } from './dtos';
import { LoginOutput } from './dtos/login.output';

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query(() => LoginOutput)
	async login(
		@Args('input') loginInput: LoginInput,
		@Context('res') res: Response,
	): Promise<LoginOutput> {
		const token = await this.authService.login(loginInput);

		res.cookie('jwt-token', token.token, {
			secure: false,
			httpOnly: false,
			sameSite: false,
			path: '/graphql',
			expires: new Date(new Date().getTime() + 60000),
		});

		return new LoginOutput({
			result: true,
			message: token.token,
		});
	}
}
