import { CardColorEnum, CardShadingEnum, CardShapeEnum } from '@set-online/api-definitions';

export interface CardInterface {
	id: string;
	shape: keyof typeof CardShapeEnum;
	color: keyof typeof CardColorEnum;
	shading: keyof typeof CardShadingEnum;
	number: number;
}
