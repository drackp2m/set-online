import { NgStyle } from '@angular/common';
import { Component, OnInit, computed, input } from '@angular/core';

@Component({
	standalone: true,
	templateUrl: './glitch-svg.component.html',
	styleUrl: './glitch-svg.component.scss',
	selector: 'set-glitch-svg',
	imports: [NgStyle],
})
export class GlitchSvgComponent implements OnInit {
	svgPath = input.required<string>();
	imgAlt = input.required<string>();
	effectOffset = input<number>(3);
	fps = input<number>(10);

	maskUrl = computed(() => {
		const svgPath = this.svgPath();

		return `url(${svgPath})`;
	});

	framesCssVariables: { [key: string]: number } = {};

	ngOnInit(): void {
		this.addPaddingCssVariable();

		this.addGlitchEffectCssVariables();
	}

	private getRandomNumber(max: number): number {
		return Math.floor(Math.random() * max);
	}

	private addCssVariable(name: string, value: number): void {
		this.framesCssVariables[`--${name}`] = value;
	}

	private addPaddingCssVariable(): void {
		const offset = this.effectOffset();

		this.addCssVariable('glitch-padding', offset);
	}

	private addGlitchEffectCssVariables(): void {
		const iterations = this.fps() * 2;

		for (let i = 0; i <= iterations; i++) {
			const leftTopRandom = this.getRandomNumber(100);
			const leftBottomRandom = this.getRandomNumber(100 - leftTopRandom);

			this.addCssVariable(`random-left-top-frame-${i}`, leftTopRandom);
			this.addCssVariable(`random-left-bottom-frame-${i}`, leftBottomRandom);

			const rightTopRandom = 100 - this.getRandomNumber(100);
			const rightBottomRandom = 100 - this.getRandomNumber(100 - rightTopRandom);

			this.addCssVariable(`random-right-top-frame-${i}`, rightTopRandom);
			this.addCssVariable(`random-right-bottom-frame-${i}`, rightBottomRandom);
		}
	}
}
