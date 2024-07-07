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
	readonly svgPath = input.required<string>();
	readonly imgAlt = input.required<string>();
	readonly maskPath = input<string>();
	readonly offset = input<number>(2);
	readonly duration = input<number>(2);

	readonly maskUrl = computed(() => {
		const svgUrl = this.svgPath();
		const maskUrl = this.maskPath();

		return `url(${maskUrl ?? svgUrl})`;
	});

	private readonly glitchSteps = 20;
	readonly framesCssVariables = new Map<string, number>();

	ngOnInit(): void {
		this.addOffsetCssVariable();
		this.addDurationCssVariable();
		this.addFpsCssVariable();
		this.addGlitchEffectCssVariables();
	}

	private getRandomNumber(max: number): number {
		return Math.floor(Math.random() * max);
	}

	private addCssVariable(name: string, value: number): void {
		this.framesCssVariables.set(`--${name}`, value);
	}

	private addOffsetCssVariable(): void {
		const offset = this.offset();

		this.addCssVariable('glitch-offset', offset);
	}

	private addDurationCssVariable(): void {
		const duration = this.duration();

		this.addCssVariable('glitch-duration', duration);
	}

	private addFpsCssVariable(): void {
		const fps = this.duration();

		this.addCssVariable('glitch-fps', fps);
	}

	private addGlitchEffectCssVariables(): void {
		for (let i = 0; i <= this.glitchSteps; i++) {
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
