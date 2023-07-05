import { NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DirectivesModule } from '../../shared/directives/directives.module';

import ExamplePage from './example.page';
import { EXAMPLE_ROUTES } from './example.routes';

@NgModule({
	declarations: [ExamplePage],
	imports: [RouterModule.forChild(EXAMPLE_ROUTES), DirectivesModule, ReactiveFormsModule, NgIf],
	exports: [ExamplePage],
})
export default class ExampleModule {}
