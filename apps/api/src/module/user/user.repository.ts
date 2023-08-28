import { CustomEntityRepository } from '../../shared/util/custom-entity.repository';

import { User } from './user.entity';

export class UserRepository extends CustomEntityRepository<User> {
	findActiveUsers(): User[] {
		return [];
	}
}
