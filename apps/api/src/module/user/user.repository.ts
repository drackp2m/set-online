import { CustomRepository } from '../../shared/util/custom-entity.repository';

import { User } from './user.entity';

export class UserRepository extends CustomRepository<User> {
	findActiveUsers(): User[] {
		return [];
	}
}
