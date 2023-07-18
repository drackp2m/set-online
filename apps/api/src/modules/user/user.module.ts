import { Module, forwardRef } from '@nestjs/common';

import { HashPasswordUsecase } from '../../shared/usecases/hash-password.usecase';
import { AuthModule } from '../auth/auth.module';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { IsUniqueUserPropRule } from './validator/is-unique-user-prop.validator';

@Module({
	imports: [forwardRef(() => AuthModule)],
	providers: [UserResolver, UserService, IsUniqueUserPropRule, HashPasswordUsecase],
	exports: [UserService],
})
export class UserModule {}
