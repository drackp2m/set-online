import { Component } from '@angular/core';

import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	templateUrl: './shadow.page.html',
	styleUrl: './shadow.page.scss',
	imports: [ExampleMenuComponent],
})
export class ShadowPage {
	shadows = ['sm', 'md', 'lg', 'xl', 'xxl'];
}
