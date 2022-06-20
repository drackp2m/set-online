import { NgModule } from '@angular/core';
import { HoverSrcDirective } from './img-hover-src.directive';

const directives = [HoverSrcDirective];

@NgModule({
	declarations: directives,
	exports: directives,
})
export class DirectivesModule {}
