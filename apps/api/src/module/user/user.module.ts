import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, forwardRef } from '@nestjs/common';

import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';
import { HashPasswordUseCase } from '../../shared/use-case/hash-password.use-case';
import { AuthModule } from '../auth/auth.module';

import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { IsUniqueUserPropRule } from './validator/is-unique-user-prop';

@Module({
	imports: [forwardRef(() => AuthModule), MikroOrmModule.forFeature([UserEntity]), PubSubModule],
	providers: [UserResolver, IsUniqueUserPropRule, HashPasswordUseCase],
})
export class UserModule {}
