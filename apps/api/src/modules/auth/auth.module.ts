import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from '../../config/jwt.config';
import { UserModule } from '../user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './strategies/jwt.strategy.service';

@Module({
	imports: [
		UserModule,
		JwtModule.registerAsync({
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				const jwtConfig: JwtConfig = configService.get<JwtConfig>('jwt', {
					infer: true,
				});

				return {
					secret: jwtConfig.secret,
					signOptions: {
						jwtid: jwtConfig.id,
						algorithm: jwtConfig.algorithm,
						expiresIn: jwtConfig.expiresIn,
					},
				};
			},
		}),
	],
	providers: [AuthResolver, AuthService, JwtStrategyService],
	exports: [AuthService],
})
export class AuthModule {}
