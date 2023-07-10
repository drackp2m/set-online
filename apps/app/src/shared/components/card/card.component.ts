import { NgFor, NgIf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

import { CardColorEnum, CardShadingEnum, CardShapeEnum } from '@set-online/api-definitions';

import { CardShapeComponent } from '../card-shape/card-shape.component';

@Component({
	standalone: true,
	selector: 'set-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	imports: [NgIf, NgFor, CardShapeComponent],
})
export class CardComponent implements AfterViewInit, OnDestroy {
	private resizeObserver!: ResizeObserver;
	@ViewChild('card') card!: ElementRef<HTMLDivElement>;

	@Input({ required: true }) shape!: keyof typeof CardShapeEnum;
	@Input({ required: true }) color!: keyof typeof CardColorEnum;
	@Input({ required: true }) shading!: keyof typeof CardShadingEnum;
	@Input({ required: true }) count!: number;
	@Input() rotate = false;

	constructor(private elementRef: ElementRef) {}

	ngAfterViewInit() {
		if (this.rotate) {
			this.card.nativeElement.style.maxWidth = 'initial';
			this.card.nativeElement.style.maxHeight = 'initial';

			this.initResizeObserver();
		}
	}

	ngOnDestroy() {
		if (this.resizeObserver) {
			this.resizeObserver.unobserve(this.elementRef.nativeElement);
			this.resizeObserver.disconnect();
		}
	}

	get repetitions(): number[] {
		return Array.from({ length: this.count });
	}

	private initResizeObserver() {
		this.resizeObserver = new ResizeObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.target === this.elementRef.nativeElement) {
					this.recalculateSize();
				}
			});
		});

		this.resizeObserver.observe(this.elementRef.nativeElement);
	}

	private recalculateSize() {
		const containerWidth = this.elementRef.nativeElement.offsetWidth;

		this.elementRef.nativeElement.style.height = `${containerWidth / 0.666}px`;

		this.card.nativeElement.style.width = `${containerWidth / 0.666}px`;
		this.card.nativeElement.style.height = `${containerWidth}px`;
	}
}
