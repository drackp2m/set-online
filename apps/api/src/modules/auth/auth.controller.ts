import { Controller, Get } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { Response } from 'express';

import { RefreshSessionUsecase } from './usecases/refresh-session.usecase';

@Controller()
export class AuthController {
	constructor(private readonly refreshSession: RefreshSessionUsecase) {}

	@Get('refresh-session')
	async refresh(@Context('res') res: Response): Promise<void> {
		const currentRefreshToken = res.req.cookies['x-jwt-refresh-token'];

		const { accessToken, refreshToken } = await this.refreshSession.execute(currentRefreshToken);

		// ToDo => add expiration time to cookies
		res.cookie('x-jwt-access-token', accessToken, {
			secure: true,
			httpOnly: true,
			sameSite: true,
			path: '/graphql',
		});

		res.cookie('x-jwt-refresh-token', refreshToken, {
			secure: true,
			httpOnly: true,
			sameSite: true,
			path: '/api/refresh-session',
		});

		res.status(200).send();
	}
}
