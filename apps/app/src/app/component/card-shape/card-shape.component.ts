import { Component, computed, input } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@playsetonline/api-definitions';

@Component({
	standalone: true,
	selector: 'app-card-shape',
	templateUrl: './card-shape.component.html',
	styleUrl: './card-shape.component.scss',
})
export class CardShapeComponent {
	shape = input.required<string, CardShape>({
		transform: (value) => CardShape[value].toLowerCase(),
	});
	color = input.required<string, CardColor>({
		transform: (value) => CardColor[value].toLowerCase(),
	});
	shading = input.required<string, CardShading>({
		transform: (value) => CardShading[value].toLowerCase(),
	});

	horizontal = input(false, {
		transform: (value: boolean | string) => (typeof value === 'string' ? value === '' : value),
	});

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
