export enum CardShapeEnum {
	oval = 1,
	squiggle = 2,
	diamond = 3,
}

export const cardShapes = new Map<CardShapeEnum, string>([
	[CardShapeEnum.oval, 'oval'],
	[CardShapeEnum.squiggle, 'squiggle'],
	[CardShapeEnum.diamond, 'diamond'],
]);
