import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';

import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { IsUniqueUserPropRule } from './validator/is-unique-user-prop';

@Module({
	imports: [MikroOrmModule.forFeature([User]), PubSubModule],
	providers: [UserResolver, IsUniqueUserPropRule],
})
export class UserModule {}
