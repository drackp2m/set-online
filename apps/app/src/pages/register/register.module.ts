import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import RegisterPage from './register.page';
import { REGISTER_ROUTES } from './register.routes';

@NgModule({
	imports: [CommonModule, RouterModule.forChild(REGISTER_ROUTES), ReactiveFormsModule],
	declarations: [RegisterPage],
	exports: [RegisterPage],
})
export default class RegisterModule {}
