export enum CardShape {
	oval = 1,
	squiggle = 2,
	diamond = 3,
}

export const cardShapes = new Map<CardShape, string>([
	[CardShape.oval, 'oval'],
	[CardShape.squiggle, 'squiggle'],
	[CardShape.diamond, 'diamond'],
]);
