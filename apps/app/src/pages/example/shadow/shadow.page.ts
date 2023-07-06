import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './shadow.page.html',
	styleUrls: ['./shadow.page.scss'],
	imports: [ExampleMenuComponent],
})
export default class ShadowPage {}
