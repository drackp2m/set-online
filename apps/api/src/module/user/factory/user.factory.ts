import { Constructor, EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';

import { User } from '../user.entity';

import { UserFaker } from './user.faker';

export abstract class UserFactory extends Factory<User> {
	abstract readonly model: Constructor<User>;

	protected definition(): EntityData<User> {
		return UserFaker.makeOne();
	}
}
