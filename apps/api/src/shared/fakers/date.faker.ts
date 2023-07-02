import { faker } from '@faker-js/faker';

import { BasicFaker } from './basic.faker';

export class DateFaker {
	private readonly basicFaker = new BasicFaker();
	private readonly now = new Date();
	private created: Date;

	constructor() {
		this.now.setUTCDate(1);
		this.now.setUTCHours(0);
		this.now.setUTCMinutes(0);
		this.now.setUTCSeconds(0);
		this.now.setUTCMilliseconds(0);
	}

	createdAt(from?: string): Date {
		const date = faker.date.between(from || '1970-01-01', this.now);
		this.created = date;

		return date;
	}

	modifiedAt(): Date {
		return this.basicFaker.boolean() ? this.created : faker.date.between(this.created, this.now);
	}
}
