import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtFactory } from '../../config/factories/jwt.factory';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './strategies/jwt.strategy.service';

@Module({
	imports: [
		forwardRef(() => UserModule),
		JwtModule.registerAsync({
			inject: [ConfigService],
			useClass: JwtFactory,
		}),
	],
	providers: [AuthResolver, AuthService, JwtStrategyService],
	exports: [AuthService],
})
export class AuthModule {}
