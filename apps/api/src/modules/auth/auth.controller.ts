import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserEntity } from '../user/user.entity';

import { LoginRequestDto } from './dtos';
import { RegisterRequestDto } from './dtos/register-request.dto';
import { LoginUsecase, RefreshSessionUsecase, RegisterUsecase } from './usecases';

@Controller()
export class AuthController {
	constructor(
		private readonly registerUsecase: RegisterUsecase,
		private readonly loginUsecase: LoginUsecase,
		private readonly refreshSessionUsecase: RefreshSessionUsecase,
	) {}

	@Post('register')
	async register(@Body() registerRequest: RegisterRequestDto): Promise<UserEntity> {
		return this.registerUsecase.execute(registerRequest);
	}

	@Post('login')
	async login(@Body() loginRequest: LoginRequestDto): Promise<void> {
		return this.loginUsecase.execute(loginRequest);
	}

	@Get('refresh-session')
	async refreshSession(): Promise<void> {
		return this.refreshSessionUsecase.execute();
	}
}
