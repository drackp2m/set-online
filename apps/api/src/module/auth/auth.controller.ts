import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { User } from '../user/user.entity';

import { LoginRequestDto } from './dto/login-request.dto';
import { RegisterRequestDto } from './dto/register-request.dto';
import { LoginUseCase } from './use-case/login.use-case';
import { LogoutUseCase } from './use-case/logout.use-case';
import { RefreshSessionUseCase } from './use-case/refresh-session.use-case';
import { RegisterUseCase } from './use-case/register.use-case';

@Controller('auth')
export class AuthController {
	constructor(
		private readonly registerUseCase: RegisterUseCase,
		private readonly loginUseCase: LoginUseCase,
		private readonly logoutUseCase: LogoutUseCase,
		private readonly refreshSessionUseCase: RefreshSessionUseCase,
	) {}

	@Post('register')
	async register(@Body() registerRequest: RegisterRequestDto): Promise<User> {
		return this.registerUseCase.execute(registerRequest);
	}

	@Post('login')
	@HttpCode(HttpStatus.NO_CONTENT)
	async login(@Body() loginRequest: LoginRequestDto): Promise<void> {
		return this.loginUseCase.execute(loginRequest);
	}

	@Get('logout')
	@HttpCode(HttpStatus.NO_CONTENT)
	async logout(): Promise<void> {
		return this.logoutUseCase.execute();
	}

	@Get('refresh-session')
	@HttpCode(HttpStatus.NO_CONTENT)
	async refreshSession(): Promise<void> {
		return this.refreshSessionUseCase.execute();
	}
}
