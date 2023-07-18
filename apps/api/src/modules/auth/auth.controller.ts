import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';

import { UserEntity } from '../user/user.entity';

import { LoginRequestDto } from './dto/login-request.dto';
import { RegisterRequestDto } from './dto/register-request.dto';
import { LoginUsecase } from './usecase/login.usecase';
import { LogoutUsecase } from './usecase/logout.usecase';
import { RefreshSessionUsecase } from './usecase/refresh-session.usecase';
import { RegisterUsecase } from './usecase/register.usecase';

@Controller()
export class AuthController {
	constructor(
		private readonly registerUsecase: RegisterUsecase,
		private readonly loginUsecase: LoginUsecase,
		private readonly logoutUsecase: LogoutUsecase,
		private readonly refreshSessionUsecase: RefreshSessionUsecase,
	) {}

	@Post('register')
	async register(@Body() registerRequest: RegisterRequestDto): Promise<UserEntity> {
		return this.registerUsecase.execute(registerRequest);
	}

	@Post('login')
	@HttpCode(HttpStatus.NO_CONTENT)
	async login(@Body() loginRequest: LoginRequestDto): Promise<void> {
		return this.loginUsecase.execute(loginRequest);
	}

	@Get('logout')
	@HttpCode(HttpStatus.NO_CONTENT)
	async logout(): Promise<void> {
		return this.logoutUsecase.execute();
	}

	@Get('refresh-session')
	@HttpCode(HttpStatus.NO_CONTENT)
	async refreshSession(): Promise<void> {
		return this.refreshSessionUsecase.execute();
	}
}
