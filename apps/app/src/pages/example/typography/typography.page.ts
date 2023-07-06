import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './typography.page.html',
	styleUrls: ['./typography.page.scss'],
	imports: [ExampleMenuComponent],
})
export default class TypographyPage {}
