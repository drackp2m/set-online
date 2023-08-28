import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, forwardRef } from '@nestjs/common';

import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';
import { HashPasswordUseCase } from '../../shared/use-case/hash-password.use-case';
import { AuthModule } from '../auth/auth.module';

import { User } from './user.entity';
import { UserResolver } from './user.resolver';

@Module({
	imports: [forwardRef(() => AuthModule), MikroOrmModule.forFeature([User]), PubSubModule],
	providers: [UserResolver, HashPasswordUseCase],
	exports: [MikroOrmModule],
})
export class UserModule {}
