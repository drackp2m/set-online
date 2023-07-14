import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from '../../shared/components/card/card.component';

import GamePage from './game.page';
import { GAME_ROUTES } from './game.routes';
import { YouWonComponent } from './shared/components/you-won/you-won.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(GAME_ROUTES),
		NgFor,
		CardComponent,
		YouWonComponent,
	],
	declarations: [GamePage],
	exports: [GamePage],
})
export default class LoginModule {}
