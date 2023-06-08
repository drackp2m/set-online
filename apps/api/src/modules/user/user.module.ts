import { Module, forwardRef } from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { IsUniqueUserPropRule } from './validators';
import { AuthModule } from '../auth/auth.module';

@Module({
	imports: [forwardRef(() => AuthModule)],
	providers: [UserResolver, UserService, IsUniqueUserPropRule],
	exports: [UserService],
})
export class UserModule {}
