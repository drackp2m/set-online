import { Component } from '@angular/core';

import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	templateUrl: './typography.page.html',
	imports: [ExampleMenuComponent],
})
export class TypographyPage {
	sizes = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

	weights = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

	obliques = ['none', 'sm', 'md', 'lg'];

	monos = ['none', 'sm', 'md', 'lg', 'xl', 'xxl'];

	casuals = ['none', 'sm', 'md', 'lg', 'xl', 'xxl'];
}
