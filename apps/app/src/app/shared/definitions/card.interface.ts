import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

export interface CardInterface {
	id: string;
	shape: keyof typeof CardShape;
	color: keyof typeof CardColor;
	shading: keyof typeof CardShading;
	number: number;
}
