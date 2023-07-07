import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './border-radius.page.html',
	styleUrls: ['./border-radius.page.scss'],
	imports: [ExampleMenuComponent],
})
export default class BorderRadiusPage {}
