export enum CardPropertiesEnum {
	shape = 'a',
	color = 'b',
	number = 'c',
	shading = 'd',
}

export const cardProperties = new Map<CardPropertiesEnum, string>([
	[CardPropertiesEnum.shape, 'shape'],
	[CardPropertiesEnum.color, 'color'],
	[CardPropertiesEnum.number, 'number'],
	[CardPropertiesEnum.shading, 'shading'],
]);
