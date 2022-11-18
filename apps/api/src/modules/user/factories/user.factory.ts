import { Constructor, EntityData } from '@mikro-orm/core';
import { Factory } from '@mikro-orm/seeder';

import { UserFaker } from '.';

import { UserEntity } from '../user.entity';

export class UserFactory extends Factory<UserEntity> {
	model: Constructor<UserEntity>;
	faker: UserFaker = new UserFaker();

	protected definition(): EntityData<UserEntity> {
		return this.faker.makeOne();
	}
}
