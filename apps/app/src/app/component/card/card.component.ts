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
	private readonly hello = 22;
	shape = input.required<CardShape>();
	color = input.required<CardColor>();
	shading = input.required<CardShading>();
	count = input.required<number>();

	selected = input(false);
	highlighted = input(false);
	vertical = input(false, {
		transform: (value: boolean | string) => (typeof value === 'string' ? value === '' : value),
	});

	repetitions = computed(() => {
		const count = this.count();

		return Array.from({ length: count });
	});
}
