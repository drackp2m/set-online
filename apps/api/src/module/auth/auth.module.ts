import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { ConfigurationModule } from '../../shared/module/config/configuration.module';
import { ConfigurationService } from '../../shared/module/config/configuration.service';
import { JwtFactory } from '../../shared/module/config/factories/jwt.factory';
import { CheckPasswordUsecase } from '../../shared/usecase/check-password.usecase';
import { UserEntity } from '../user/user.entity';

import { AuthController } from './auth.controller';
import { JwtGuard } from './guard/jwt.guard';
import { JwtStrategyService } from './strategy/jwt.strategy.service';
import { CreateJwtAccessTokenUsecase } from './usecase/create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './usecase/create-jwt-refresh-token.usecas';
import { LoginUsecase } from './usecase/login.usecase';
import { LogoutUsecase } from './usecase/logout.usecase';
import { RefreshSessionUsecase } from './usecase/refresh-session.usecase';
import { RegisterUsecase } from './usecase/register.usecase';
import { SetJwtTokenUsecase } from './usecase/set-jwt-token.usecase';

@Module({
	imports: [
		ConfigurationModule,
		JwtModule.registerAsync({
			imports: [ConfigurationModule],
			inject: [ConfigurationService],
			useClass: JwtFactory,
		}),
		MikroOrmModule.forFeature({ entities: [UserEntity] }),
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: JwtGuard,
		},
		JwtStrategyService,
		RegisterUsecase,
		LoginUsecase,
		LogoutUsecase,
		RefreshSessionUsecase,
		CreateJwtAccessTokenUsecase,
		CreateJwtRefreshTokenUsecase,
		SetJwtTokenUsecase,
		CheckPasswordUsecase,
	],
	controllers: [AuthController],
})
export class AuthModule {}
