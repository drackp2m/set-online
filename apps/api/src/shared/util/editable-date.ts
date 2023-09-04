import { GenerateNowDateUseCase } from '../use-case/generate-now-date.use-case';

type ManipulationDateAttribute =
	| 'year'
	| 'month'
	| 'day'
	| 'hour'
	| 'minute'
	| 'second'
	| 'millisecond';

export class EditableDate extends Date {
	constructor(initialDate = new GenerateNowDateUseCase().execute()) {
		super(initialDate);
	}

	edit(attribute: ManipulationDateAttribute, value: number): this {
		this.manipulatedDate(attribute, value);

		return this;
	}

	set(attribute: ManipulationDateAttribute, value: number): this {
		this.manipulatedDate(attribute, value, true);

		return this;
	}

	private manipulatedDate(
		attribute: ManipulationDateAttribute,
		value: number,
		replace = false,
	): void {
		const currentValue = this[`getUTC${this.manipulationDateAttributeMethod(attribute)}`]();

		this[`setUTC${this.manipulationDateAttributeMethod(attribute)}`](
			(replace ? 0 : currentValue) + this.fixValue(attribute, value, replace),
		);
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

	private fixValue(attribute: ManipulationDateAttribute, value: number, replace: boolean): number {
		if (replace && attribute === 'month') {
			return value - 1;
		}

		return value;
	}
}
