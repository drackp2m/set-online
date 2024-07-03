export enum CardShading {
	solid = 1,
	striped = 2,
	outlined = 3,
}

export const cardShadings = new Map<CardShading, string>([
	[CardShading.solid, 'solid'],
	[CardShading.striped, 'striped'],
	[CardShading.outlined, 'outlined'],
]);
