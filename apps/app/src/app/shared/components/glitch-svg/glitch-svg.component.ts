import { Component, computed, input } from '@angular/core';

@Component({
	standalone: true,
	templateUrl: './glitch-svg.component.html',
	styleUrl: './glitch-svg.component.scss',
	selector: 'set-glitch-svg',
})
export class GlitchSvgComponent {
	svgPath = input.required<string>();
	imgAlt = input.required<string>();
	effectOffset = input<number>(3);

	maskUrl = computed(() => {
		const svgPath = this.svgPath();

		return `url(${svgPath})`;
	});
}
