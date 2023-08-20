import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CardComponent } from '../../shared/components/card/card.component';

import OnlinePage from './online.page';
import { ONLINE_ROUTES } from './online.routes';
import { YouWonComponent } from './shared/components/you-won/you-won.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(ONLINE_ROUTES),
		NgFor,
		CardComponent,
		YouWonComponent,
	],
	declarations: [OnlinePage],
	exports: [OnlinePage],
})
export default class OnlineModule {}
