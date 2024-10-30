import { faker } from '@faker-js/faker';
import { EntityData } from '@mikro-orm/core';

import { BasicFaker } from '../../../shared/faker/basic.faker';
import { DateFaker } from '../../../shared/faker/date.faker';
import { UserRole } from '../definition/user-role.enum';
import { User } from '../user.entity';

export interface UserFakerOptions {
	createdSince?: string;
}

export class UserFaker {
	static readonly makeOne = new UserFaker().makeEntity;

	static make(
		amount: number,
		overrideParameters?: EntityData<User>,
		options?: UserFakerOptions,
	): User[] {
		return [...Array(amount)].map(() => new UserFaker().makeEntity(overrideParameters, options));
	}

	private makeEntity(overrideParameters?: EntityData<User>, options?: UserFakerOptions): User {
		const dateFaker = new DateFaker();

		const firstName = faker.person.firstName();
		const lastName = faker.person.lastName();

		return new User({
			uuid: faker.string.uuid(),
			username: faker.internet.userName({ firstName, lastName }),
			password: faker.internet.password({
				length: 32,
				memorable: false,
				pattern: /[A-Z0-9_\-*?.]/,
			}),
			email: BasicFaker.boolean() ? faker.internet.email({ firstName, lastName }) : undefined,
			role: BasicFaker.randomEnum(UserRole),
			createdAt: dateFaker.createdAt(options?.createdSince),
			updatedAt: dateFaker.modifiedAt(),
			...overrideParameters,
		});
	}
}
