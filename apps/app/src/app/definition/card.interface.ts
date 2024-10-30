import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

export interface CardInterface {
	id: string;
	shape: CardShape;
	color: CardColor;
	shading: CardShading;
	number: number;
}
