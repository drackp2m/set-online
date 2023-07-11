import { NgModule } from '@angular/core';

import { AppUrlPipe } from './app-url.pipe';

const pipes = [AppUrlPipe];

@NgModule({
	declarations: pipes,
	exports: pipes,
})
export class PipesModule {}
