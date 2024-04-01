import { faker } from '@faker-js/faker';

import { EditableDate } from '../util/editable-date';

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
	private readonly now = new EditableDate();
	private created?: Date;

	constructor() {
		this.now.set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0);
	}

	createdAt(since?: string): Date {
		const twoYearsAgo = this.twoYearsAgo();

		this.created = faker.date.between({ from: since || twoYearsAgo, to: this.now });

		return this.created;
	}

	modifiedAt(): Date {
		const twoYearsAgo = this.twoYearsAgo();

		return this.created && BasicFaker.boolean()
			? this.created
			: faker.date.between({ from: this.created ?? twoYearsAgo, to: this.now });
	}

	expiresOn(until?: string): Date {
		const limitOptions = new Map<ManipulationDateAttribute, number>([['day', 1]]);
		const untilLimit = this.manipulatedDate(limitOptions);

		this.created = faker.date.between({ from: this.now, to: until ?? untilLimit });

		return this.created;
	}

	private twoYearsAgo(): Date {
		const limitOptions = new Map<ManipulationDateAttribute, number>([['year', -2]]);

		return this.manipulatedDate(limitOptions);
	}

	private manipulatedDate(options: Map<ManipulationDateAttribute, number>): Date {
		const date = new Date(this.now);

		options.forEach((value, key) => {
			const currentValue = date[`getUTC${this.manipulationDateAttributeMethod(key)}`]();

			date[`setUTC${this.manipulationDateAttributeMethod(key)}`](currentValue + value);
		});

		return date;
	}

	private manipulationDateAttributeMethod(
		attribute: ManipulationDateAttribute,
	): 'FullYear' | 'Month' | 'Date' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' {
		switch (attribute) {
			case 'year':
				return 'FullYear';
			case 'month':
				return 'Month';
			case 'day':
				return 'Date';
			case 'hour':
				return 'Hours';
			case 'minute':
				return 'Minutes';
			case 'second':
				return 'Seconds';
			case 'millisecond':
				return 'Milliseconds';
		}
	}
}
