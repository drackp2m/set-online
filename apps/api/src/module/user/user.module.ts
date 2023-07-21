import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, forwardRef } from '@nestjs/common';

import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';
import { HashPasswordUsecase } from '../../shared/usecase/hash-password.usecase';
import { AuthModule } from '../auth/auth.module';

import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { IsUniqueUserPropRule } from './validator/is-unique-user-prop.validator';

@Module({
	imports: [forwardRef(() => AuthModule), MikroOrmModule.forFeature([UserEntity]), PubSubModule],
	providers: [UserResolver, IsUniqueUserPropRule, HashPasswordUsecase],
})
export class UserModule {}
