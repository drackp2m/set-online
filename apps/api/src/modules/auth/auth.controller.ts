import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { Response as ExpressResponse } from 'express';

import { LoginRequestDto } from './dtos';
import { LoginUsecase } from './usecases/login.usecase';
import { RefreshSessionUsecase } from './usecases/refresh-session.usecase';

@Controller()
export class AuthController {
	constructor(
		private readonly loginUsecase: LoginUsecase,
		private readonly refreshSessionUsecase: RefreshSessionUsecase,
	) {}

	@Post('login')
	async login(
		@Body() loginRequest: LoginRequestDto,
		@Response() res: ExpressResponse,
	): Promise<void> {
		const { accessToken, refreshToken } = await this.loginUsecase.execute(loginRequest);

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

	@Get('refresh-session')
	async refreshSession(@Response() res: ExpressResponse): Promise<void> {
		const currentRefreshToken = res.req.cookies['x-jwt-refresh-token'];

		const { accessToken, refreshToken } = await this.refreshSessionUsecase.execute(
			currentRefreshToken,
		);

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