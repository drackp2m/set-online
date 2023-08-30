import { faker } from '@faker-js/faker';

import { GenerateNowDateUseCase } from '../use-case/generate-now-date.use-case';

import { BasicFaker } from './basic.faker';

type ManipulationDateAttribute =
	| 'year'
	| 'month'
	| 'day'
	| 'hour'
	| 'minute'
	| 'second'
	| 'millisecond';

export class DateFaker {
	private readonly now = GenerateNowDateUseCase.execute();
	private created: Date;

	constructor() {
		this.now.setUTCHours(0);
		this.now.setUTCMinutes(0);
		this.now.setUTCSeconds(0);
		this.now.setUTCMilliseconds(0);
	}

	createdAt(since?: string): Date {
		const limitOptions = new Map<ManipulationDateAttribute, number>([['year', -2]]);
		const sinceLimit = this.manipulatedDate(limitOptions);

		this.created = faker.date.between(since || sinceLimit, this.now);

		return this.created;
	}

	modifiedAt(): Date {
		return BasicFaker.boolean() ? this.created : faker.date.between(this.created, this.now);
	}

	expiresOn(until: string): Date {
		const limitOptions = new Map<ManipulationDateAttribute, number>([['day', 1]]);
		const untilLimit = this.manipulatedDate(limitOptions);

		this.created = faker.date.between(this.now, until || untilLimit);

		return this.created;
	}

	private manipulatedDate(options: Map<ManipulationDateAttribute, number>): Date {
		const date = new Date(this.now);

		options.forEach((value, key) => {
			const currentValue = date[`getUTC${this.manipulationDateAttributeMethod(key)}`]();

			date[`setUTC${this.manipulationDateAttributeMethod(key)}`](currentValue + value);
		});

		return date;
	}

	private manipulationDateAttributeMethod(attribute: ManipulationDateAttribute): string {
		switch (attribute) {
			case 'year':
				return 'FullYear';
			case 'month':
				return 'Month';
			case 'day':
				return 'Date';
			default:
				return `${attribute.charAt(0).toUpperCase() + attribute.slice(1)}s`;
		}
	}
}
