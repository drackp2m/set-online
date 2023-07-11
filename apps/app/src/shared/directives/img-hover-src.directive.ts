import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
	selector: 'img[setHoverSrc]',
})
export class HoverSrcDirective implements OnInit {
	@Input() setHoverSrc = '';

	private src!: string;

	constructor(private el: ElementRef) {}

	@HostListener('mouseenter') onMouseEnter() {
		this.el.nativeElement.attributes.src.value = this.setHoverSrc;
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.el.nativeElement.attributes.src.value = this.src;
	}

	ngOnInit(): void {
		this.src = this.el.nativeElement.attributes.src.value;
	}
}
