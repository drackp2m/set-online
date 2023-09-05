import { Injectable } from '@nestjs/common';

import { cardColors } from '../definition/card-color.enum';
import { CardPropertiesEnum } from '../definition/card-properties.enum';
import { cardShadings } from '../definition/card-shading.enum';
import { cardShapes } from '../definition/card-shape.enum';

@Injectable()
export class GenerateGameCardsUseCase {
	execute(): string[] {
		const cards = [];

		cardShapes.forEach((_shapeValue, shapeKey) => {
			const shape = `:${CardPropertiesEnum['shape']}${shapeKey}:`;

			cardColors.forEach((_colorValue, colorKey) => {
				let color = shape;

				color += `:${CardPropertiesEnum['color']}${colorKey}:`;

				[1, 2, 3].forEach((numberKey) => {
					let number = color;

					number += `:${CardPropertiesEnum['number']}${numberKey}:`;

					cardShadings.forEach((_shadingValue, shadingKey) => {
						let shading = number;

						shading += `:${CardPropertiesEnum['shading']}${shadingKey}:`;

						cards.push(shading);
					});
				});
			});
		});

		return cards;
	}
}
