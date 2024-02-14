import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './spacing.page.html',
	styleUrl: './spacing.page.scss',
	imports: [ExampleMenuComponent, NgFor],
})
export default class SpacingPage {
	spaces = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

	getSpacing(name: string): string {
		return `var(--spacing-${name})`;
	}
}
