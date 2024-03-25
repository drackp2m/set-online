import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { ConfigurationModule } from '../../shared/module/config/configuration.module';
import { ConfigurationService } from '../../shared/module/config/configuration.service';
import { JwtFactory } from '../../shared/module/config/factories/jwt.factory';
import { CheckPasswordUseCase } from '../../shared/use-case/check-password.use-case';
import { HashPasswordUseCase } from '../../shared/use-case/hash-password.use-case';
import { User } from '../user/user.entity';

import { AuthController } from './auth.controller';
import { JwtGuard } from './guard/jwt.guard';
import { JwtStrategyService } from './strategy/jwt.strategy.service';
import { CheckJwtTokenUseCase } from './use-case/check-jwt-token.use-case';
import { CreateJwtAccessTokenUseCase } from './use-case/create-jwt-access-token.use-case';
import { CreateJwtRefreshTokenUseCase } from './use-case/create-jwt-refresh-token.use-case';
import { LoginUseCase } from './use-case/login.use-case';
import { LogoutUseCase } from './use-case/logout.use-case';
import { RefreshSessionUseCase } from './use-case/refresh-session.use-case';
import { RegisterUseCase } from './use-case/register.use-case';
import { SetJwtTokenUseCase } from './use-case/set-jwt-token.use-case';

@Module({
	imports: [
		MikroOrmModule.forFeature([User]),
		ConfigurationModule,
		JwtModule.registerAsync({
			imports: [ConfigurationModule],
			inject: [ConfigurationService],
			useClass: JwtFactory,
		}),
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: JwtGuard,
		},
		RegisterUseCase,
		LoginUseCase,
		LogoutUseCase,
		JwtStrategyService,
		HashPasswordUseCase,
		CheckPasswordUseCase,
		CheckJwtTokenUseCase,
		CreateJwtAccessTokenUseCase,
		CreateJwtRefreshTokenUseCase,
		SetJwtTokenUseCase,
		RefreshSessionUseCase,
	],
	exports: [CheckJwtTokenUseCase],
	controllers: [AuthController],
})
export class AuthModule {}
