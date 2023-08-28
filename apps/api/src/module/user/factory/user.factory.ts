import { Constructor, EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';

import { User } from '../user.entity';

import { UserFaker } from './user.faker';

export class UserFactory extends Factory<User> {
	model: Constructor<User>;
	faker: UserFaker = new UserFaker();

	protected definition(): EntityData<User> {
		return this.faker.makeOne();
	}
}
