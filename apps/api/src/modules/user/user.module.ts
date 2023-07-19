import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, forwardRef } from '@nestjs/common';

import { HashPasswordUsecase } from '../../shared/usecases/hash-password.usecase';
import { AuthModule } from '../auth/auth.module';

import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { IsUniqueUserPropRule } from './validator/is-unique-user-prop.validator';

@Module({
	imports: [forwardRef(() => AuthModule), MikroOrmModule.forFeature([UserEntity])],
	providers: [UserResolver, IsUniqueUserPropRule, HashPasswordUsecase],
})
export class UserModule {}
