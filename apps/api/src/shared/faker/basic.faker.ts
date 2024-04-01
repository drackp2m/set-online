export class BasicFaker {
	static boolean(): boolean {
		return Math.random() < 0.5;
	}

	static randomEnum<T extends object>(enumInstance: T): T[keyof T] {
		const enumValues = Object.keys(enumInstance) as Array<keyof T>;

		if (!enumValues[0]) {
			throw new Error('Enum is empty');
		}

		const randomIndex = Math.floor(Math.random() * enumValues.length);
		const randomEnumKey = enumValues[randomIndex];

		if (!randomEnumKey) {
			return enumInstance[enumValues[0]];
		}

		return enumInstance[randomEnumKey];
	}
}
