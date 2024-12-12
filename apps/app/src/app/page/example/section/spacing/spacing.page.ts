import { Component } from '@angular/core';

import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	templateUrl: './spacing.page.html',
	styleUrl: './spacing.page.scss',
	imports: [ExampleMenuComponent],
})
export class SpacingPage {
	spaces = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];
}
