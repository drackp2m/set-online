import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';

import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';

import { User } from './user.entity';
import { UserResolver } from './user.resolver';

@Module({
	imports: [MikroOrmModule.forFeature([User]), PubSubModule],
	providers: [UserResolver],
})
export class UserModule {}
