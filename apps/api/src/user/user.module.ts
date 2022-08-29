import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { IsUniqueUserPropRule } from './validators/is-unique-user-prop.validator';

@Module({
	imports: [forwardRef(() => AuthModule)],
	providers: [UserResolver, UserService, IsUniqueUserPropRule],
	exports: [UserService],
})
export class UserModule {}
