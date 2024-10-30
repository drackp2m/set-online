import { Component } from '@angular/core';

import { CardComponent } from '../../../../component/card/card.component';
import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './shadow.page.html',
	styleUrl: './shadow.page.scss',
	imports: [ExampleMenuComponent, CardComponent],
})
export class ShadowPage {
	shadows = ['sm', 'md', 'lg', 'xl', 'xxl'];
}
