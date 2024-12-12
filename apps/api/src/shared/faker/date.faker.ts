import { faker } from '@faker-js/faker';
import { Logger } from '@nestjs/common';

import { DateSetterMethods } from '../definition/date-setter-methods.type';
import { ManipulationDateAttribute } from '../definition/manipulation-date-attribute.type';
import { ManipulationDate } from '../definition/manipulation-date.type';
import { EditableDate } from '../util/editable-date';

import { BasicFaker } from './basic.faker';

export class DateFaker {
	private readonly now = new EditableDate();
	private created?: Date;

	private readonly logger = new Logger();

	constructor() {
		this.now.set('hour', 0).set('minute', 0).set('second', 0).set('millisecond', 0);
	}

	createdAt(since?: string | Date | number): Date | null {
		const twoYearsAgo = this.twoYearsAgo();
		const sinceAsDate = since !== undefined && new Date(since);

		if (this.checkValidDate(sinceAsDate) === false) {
			this.logger.error('DateFaker.createdAt(); `since` is not a valid Date');

			return null;
		} else if (sinceAsDate > this.now) {
			this.logger.error(
				`DateFaker.createdAt(); \`since\` must be less or equal than ${this.now.toLocaleString()}`,
			);

			return null;
		}

		this.created = faker.date.between({ from: since || twoYearsAgo, to: this.now });

		return this.created;
	}

	modifiedAt(): Date {
		const twoYearsAgo = this.twoYearsAgo();

		return this.created && BasicFaker.boolean()
			? this.created
			: faker.date.between({ from: this.created ?? twoYearsAgo, to: this.now });
	}

	expiresOn(until?: string | Date | number): Date | null {
		const limitOptions: ManipulationDate = new Map([['day', 1]]);
		const untilLimit = this.manipulatedDate(limitOptions);
		const untilAsDate = until !== undefined && new Date(until);

		if (this.checkValidDate(untilAsDate) === false) {
			this.logger.error('DateFaker.createdAt(); `until` is not a valid Date');

			return null;
		} else if (untilAsDate < this.now) {
			this.logger.error(
				`DateFaker.createdAt(); \`until\` must be greater or equal that ${this.now.toLocaleString()}`,
			);

			return null;
		}

		this.created = faker.date.between({ from: this.now, to: until ?? untilLimit });

		return this.created;
	}

	private checkValidDate(date: Date): boolean {
		return date.toString() !== 'Invalid Date';
	}

	private twoYearsAgo(): Date {
		const limitOptions: ManipulationDate = new Map([['year', -2]]);

		return this.manipulatedDate(limitOptions);
	}

	private manipulatedDate(options: ManipulationDate): Date {
		const date = new Date(this.now);

		options.forEach((value, key) => {
			const currentValue = date[`getUTC${this.manipulationDateAttributeMethod(key)}`]();

			date[`setUTC${this.manipulationDateAttributeMethod(key)}`](currentValue + value);
		});

		return date;
	}

	private manipulationDateAttributeMethod(attribute: ManipulationDateAttribute): DateSetterMethods {
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
