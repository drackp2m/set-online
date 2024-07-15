import { NgIf } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

@Component({
	standalone: true,
	selector: 'set-card-shape',
	templateUrl: './card-shape.component.html',
	styleUrl: './card-shape.component.scss',
	imports: [NgIf],
})
export class CardShapeComponent {
	horizontal = input(false);

	shape = input.required<keyof typeof CardShape>();
	color = input.required<keyof typeof CardColor>();
	shading = input.required<keyof typeof CardShading>();

	basicMask = computed(() => {
		const shape = this.shape();
		let shading = this.shading();

		shading = shading === 'striped' ? 'outlined' : shading;

		return this.getUrl(`${shape}-${shading}`);
	});

	solidMask = computed(() => {
		const shading = this.shading();
		const shape = this.shape();

		return shading === 'striped' ? this.getUrl(`${shape}-solid`) : undefined;
	});

	stripedMask = computed(() => {
		const shading = this.shading();

		return shading === 'striped' ? this.getUrl('strips') : undefined;
	});

	private getUrl(iconName: string): string {
		return `url(assets/icons/${iconName}.svg) no-repeat center`;
	}
}
