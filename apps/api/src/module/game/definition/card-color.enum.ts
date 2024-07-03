export enum CardColor {
	red = 1,
	purple = 2,
	green = 3,
}

export const cardColors = new Map<CardColor, string>([
	[CardColor.red, 'red'],
	[CardColor.purple, 'purple'],
	[CardColor.green, 'green'],
]);
