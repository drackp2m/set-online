import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import RegisterPage from './register.page';
import { REGISTER_ROUTES } from './register.routes';

@NgModule({
	declarations: [RegisterPage],
	imports: [RouterModule.forChild(REGISTER_ROUTES), ReactiveFormsModule],
	exports: [RegisterPage],
})
export default class RegisterModule {}
