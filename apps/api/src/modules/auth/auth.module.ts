import { Module, forwardRef } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { ConfigurationModule } from '../../common/config/configuration.module';
import { ConfigurationService } from '../../common/config/configuration.service';
import { JwtFactory } from '../../common/config/factories';
import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards';
import { JwtStrategyService } from './strategies';

@Module({
	imports: [
		ConfigurationModule,
		forwardRef(() => UserModule),
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
		AuthController,
		AuthResolver,
		AuthService,
		JwtStrategyService,
	],
	exports: [AuthService],
})
export class AuthModule {}
