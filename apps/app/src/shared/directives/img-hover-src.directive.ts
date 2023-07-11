import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: 'img[setHoverSrc]',
})
export class HoverSrcDirective {
	@Input() setHoverSrc = '';

	private src: string;

	constructor(private el: ElementRef) {
		this.src = this.el.nativeElement.attributes.src.value;
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.el.nativeElement.attributes.src.value = this.setHoverSrc;
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.el.nativeElement.attributes.src.value = this.src;
	}
}
