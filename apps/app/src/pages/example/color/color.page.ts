import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './color.page.html',
	styleUrls: ['./color.page.scss'],
	imports: [ExampleMenuComponent],
})
export default class ColorPage {}
