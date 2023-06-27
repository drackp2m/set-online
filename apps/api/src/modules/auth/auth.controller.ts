import { Controller, Get } from '@nestjs/common';
import { Context } from '@nestjs/graphql';
import { Request, Response } from 'express';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Get('refresh')
	async refresh(@Context('res') res: Response, @Context('req') req: Request): Promise<void> {
		const refresh = req.cookies['jwt-refresh'];

		console.log(refresh);

		// res.cookie('jwt-token', token.token, {
		// 	secure: true,
		// 	httpOnly: true,
		// 	sameSite: true,
		// 	path: '/graphql',
		// 	expires: new Date(new Date().getTime() + 60000),
		// });
	}
}
