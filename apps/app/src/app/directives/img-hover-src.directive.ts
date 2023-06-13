import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: 'img[setOnlineHoverSrc]',
})
export class HoverSrcDirective {
	@Input() setOnlineHoverSrc = '';

	private src: string;

	constructor(private el: ElementRef) {
		this.src = this.el.nativeElement.attributes.src.value;
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.el.nativeElement.attributes.src.value = this.setOnlineHoverSrc;
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.el.nativeElement.attributes.src.value = this.src;
	}
}
