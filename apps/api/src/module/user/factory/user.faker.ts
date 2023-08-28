import { faker } from '@faker-js/faker';
import { EntityData } from '@mikro-orm/core';

import { BasicFaker } from '../../../shared/faker/basic.faker';
import { DateFaker } from '../../../shared/faker/date.faker';
import { UserRole } from '../definition/user-role.enum';
import { User } from '../user.entity';

export interface UserFakerOptions {
	createdFrom?: string;
}

export class UserFaker {
	private readonly basicFaker = new BasicFaker();
	private readonly dateFaker = new DateFaker();

	makeOne = this.makeEntity;

	make(amount: number, overrideParameters?: EntityData<User>, options?: UserFakerOptions): User[] {
		return [...Array(amount)].map(() => this.makeEntity(overrideParameters, options));
	}

	private makeEntity(overrideParameters?: EntityData<User>, options?: UserFakerOptions): User {
		const firstName = faker.name.firstName();
		const lastName = faker.name.lastName();

		return new User({
			uuid: faker.datatype.uuid(),
			username: faker.internet.userName(firstName, lastName),
			password: faker.internet.password(32, false, /[A-Z0-9_\-*?.]/),
			email: this.basicFaker.boolean() ? faker.internet.email(firstName, lastName) : undefined,
			role: this.basicFaker.randomEnum(UserRole),
			createdAt: this.dateFaker.createdAt(options?.createdFrom),
			updatedAt: this.dateFaker.modifiedAt(),
			...overrideParameters,
		});
	}
}
