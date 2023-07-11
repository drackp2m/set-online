import { Module, forwardRef } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { ConfigurationModule } from '../../shared/config/configuration.module';
import { ConfigurationService } from '../../shared/config/configuration.service';
import { JwtFactory } from '../../shared/config/factories';
import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';
import { JwtGuard } from './guards';
import { JwtStrategyService } from './strategies';
import { RegisterUsecase } from './usecases';
import { CreateJwtAccessTokenUsecase } from './usecases/create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './usecases/create-jwt-refresh-token.usecas';
import { LoginUsecase } from './usecases/login.usecase';
import { LogoutUsecase } from './usecases/logout.usecase';
import { RefreshSessionUsecase } from './usecases/refresh-session.usecase';
import { SetJwtTokenUsecase } from './usecases/set-jwt-token.usecase';

@Module({
	imports: [
		ConfigurationModule,
		JwtModule.registerAsync({
			imports: [ConfigurationModule],
			inject: [ConfigurationService],
			useClass: JwtFactory,
		}),
		forwardRef(() => UserModule),
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
	],
	controllers: [AuthController],
})
export class AuthModule {}
