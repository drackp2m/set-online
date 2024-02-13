import { Directive, ElementRef, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

@Directive({
	selector: 'img[setSrc]',
})
export class HoverSrcDirective {
	@Input({ required: true }) setSrc!: string;

	constructor(private el: ElementRef) {
		this.el.nativeElement.attributes.src.value = this.getSrc(this.setSrc);
	}

	private getSrc(path: string): string {
		return environment.production
			? `https://raw.githubusercontent.com/drackp2m/set-online/dev/apps/app/src/${path}`
			: path;
	}
}
