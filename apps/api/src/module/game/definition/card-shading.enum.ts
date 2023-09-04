export enum CardShadingEnum {
	solid = 1,
	striped = 2,
	outlined = 3,
}

export const cardShadings = new Map<CardShadingEnum, string>([
	[CardShadingEnum.solid, 'solid'],
	[CardShadingEnum.striped, 'striped'],
	[CardShadingEnum.outlined, 'outlined'],
]);
