import { Args, Context, Query, Resolver } from '@nestjs/graphql';
import { Response } from 'express';

import { ConfigurationService } from '../../common/config/configuration.service';

import { AuthService } from './auth.service';
import { LoginInput } from './dtos';

@Resolver()
export class AuthResolver {
	constructor(
		private readonly authService: AuthService,
		private readonly configService: ConfigurationService,
	) {}

	@Query(() => Boolean)
	async login(
		@Args('input') loginInput: LoginInput,
		@Context('res') res: Response,
	): Promise<boolean> {
		const { accessToken, refreshToken } = await this.authService.login(loginInput);

		// ToDo => add expiration time to cookies
		res.cookie('jwt-access-token', accessToken, {
			secure: true,
			httpOnly: true,
			sameSite: true,
			path: '/graphql',
		});

		res.cookie('jwt-refresh-token', refreshToken, {
			secure: true,
			httpOnly: true,
			sameSite: true,
			path: '/api/refresh-session',
		});

		return true;
	}
}
