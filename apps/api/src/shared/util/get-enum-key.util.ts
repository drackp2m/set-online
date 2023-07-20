export function getEnumKey<T extends string>(
	enumObj: Record<T, string>,
	value: string,
): T | undefined {
	return Object.keys(enumObj).find((key) => enumObj[key as T] === value) as T | undefined;
}
