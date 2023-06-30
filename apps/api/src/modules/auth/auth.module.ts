import { Module, forwardRef } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { ConfigurationModule } from '../../common/config/configuration.module';
import { ConfigurationService } from '../../common/config/configuration.service';
import { JwtFactory } from '../../common/config/factories';
import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';
import { JwtGuard } from './guards';
import { JwtStrategyService } from './strategies';
import { CreateJwtAccessTokenUsecase } from './usecases/create-jwt-access-token.usecase';
import { CreateJwtRefreshTokenUsecase } from './usecases/create-jwt-refresh-token.usecas';
import { LoginUsecase } from './usecases/login.usecase';
import { RefreshSessionUsecase } from './usecases/refresh-session.usecase';

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
		CreateJwtAccessTokenUsecase,
		CreateJwtRefreshTokenUsecase,
		RefreshSessionUsecase,
		LoginUsecase,
	],
	controllers: [AuthController],
	exports: [
		CreateJwtAccessTokenUsecase,
		CreateJwtRefreshTokenUsecase,
		RefreshSessionUsecase,
		LoginUsecase,
	],
})
export class AuthModule {}
