export enum CardColorEnum {
	red = 1,
	purple = 2,
	green = 3,
}

export const cardColors = new Map<CardColorEnum, string>([
	[CardColorEnum.red, 'red'],
	[CardColorEnum.purple, 'purple'],
	[CardColorEnum.green, 'green'],
]);
