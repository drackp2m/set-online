export class BasicFaker {
	boolean(): boolean {
		return Math.random() < 0.5;
	}

	randomEnum<T>(enumInstance: T): T[keyof T] {
		const enumValues = Object.keys(enumInstance) as Array<keyof T>;
		const randomIndex = Math.floor(Math.random() * enumValues.length);
		const randomEnumKey = enumValues[randomIndex];

		return enumInstance[randomEnumKey];
	}
}
