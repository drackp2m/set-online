import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

@Component({
	standalone: true,
	selector: 'set-card-shape',
	templateUrl: './card-shape.component.html',
	styleUrl: './card-shape.component.scss',
	imports: [NgIf],
})
export class CardShapeComponent {
	@Input({ required: true }) shape!: keyof typeof CardShape;
	@Input({ required: true }) color!: keyof typeof CardColor;
	@Input({ required: true }) shading!: keyof typeof CardShading;

	get basicMask(): string {
		const shading = this.shading === 'striped' ? 'outlined' : this.shading;

		return this.getUrl(`${this.shape}-${shading}`);
	}

	get solidMask(): string | undefined {
		return this.shading === 'striped' ? this.getUrl(`${this.shape}-solid`) : undefined;
	}

	get stripedMask(): string | undefined {
		return this.shading === 'striped' ? this.getUrl('strips') : undefined;
	}

	private getUrl(iconName: string): string {
		return `url(assets/icons/${iconName}.svg) no-repeat center`;
	}
}
