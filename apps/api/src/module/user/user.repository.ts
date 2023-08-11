import { Injectable } from '@nestjs/common';

import { CustomEntityRepository } from '../../shared/util/custom-entity.repository';

import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository extends CustomEntityRepository<UserEntity> {
	findActiveUsers(): UserEntity[] {
		return [];
	}
}
