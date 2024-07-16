import { NgFor, NgIf } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

import { CardShapeComponent } from '../card-shape/card-shape.component';

@Component({
	standalone: true,
	selector: 'set-card',
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss',
	imports: [NgIf, NgFor, CardShapeComponent],
})
export class CardComponent {
	shape = input.required<keyof typeof CardShape>();
	color = input.required<keyof typeof CardColor>();
	shading = input.required<keyof typeof CardShading>();
	count = input.required<number>();

	vertical = input(false, {
		transform: (value: boolean | string) => (typeof value === 'string' ? value === '' : value),
	});
	selected = input(false);
	highlighted = input(false);

	repetitions = computed(() => {
		const count = this.count();

		return Array.from({ length: count });
	});
}
