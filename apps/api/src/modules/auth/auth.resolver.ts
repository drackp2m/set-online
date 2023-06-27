import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { LoginInput } from './dtos';

@Resolver()
export class AuthResolver {
	constructor(private readonly authService: AuthService) {}

	@Query(() => Boolean)
	async login(
		@Args('input') loginInput: LoginInput,
		@Context('res') res: Response,
	): Promise<boolean> {
		const token = await this.authService.login(loginInput);

		res.cookie('jwt-access-token', token, {
			secure: true,
			httpOnly: true,
			sameSite: true,
			path: '/graphql',
			expires: new Date(new Date().getTime() + 60000),
		});

		return true;
	}
}
