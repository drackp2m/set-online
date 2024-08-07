import { Component } from '@angular/core';

import { CardComponent } from '../../../shared/components/card/card.component';
import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './shadow.page.html',
	styleUrl: './shadow.page.scss',
	imports: [ExampleMenuComponent, CardComponent],
})
export class ShadowPage {
	shadows = ['sm', 'md', 'lg', 'xl', 'xxl'];
}
