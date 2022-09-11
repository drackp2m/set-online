import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

import { JwtFactory } from '../common/config/factories/jwt.factory';
import { BcryptService } from '../common/wrappers/bcrypt.service';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategyService } from './strategies/jwt.strategy.service';

@Module({
	imports: [
		forwardRef(() => UserModule),
		JwtModule.registerAsync({
			inject: [ConfigService],
			useClass: JwtFactory,
		}),
	],
	providers: [
		{
			provide: APP_GUARD,
			useClass: JwtGuard,
		},
		AuthResolver,
		AuthService,
		JwtStrategyService,
		BcryptService,
	],
	exports: [AuthService],
})
export class AuthModule {}
