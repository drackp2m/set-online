import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardColorEnum, CardShadingEnum, CardShapeEnum } from '@set-online/api-definitions';

import { CardShapeComponent } from '../card-shape/card-shape.component';

@Component({
	standalone: true,
	selector: 'set-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	imports: [NgIf, NgFor, CardShapeComponent],
})
export class CardComponent {
	@Input({ required: true }) shape!: keyof typeof CardShapeEnum;
	@Input({ required: true }) color!: keyof typeof CardColorEnum;
	@Input({ required: true }) shading!: keyof typeof CardShadingEnum;
	@Input({ required: true }) count!: number;

	get repetitions(): number[] {
		return Array.from({ length: this.count });
	}
}
