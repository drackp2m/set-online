import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './typography.page.html',
	styleUrl: './typography.page.scss',
	imports: [ExampleMenuComponent, NgFor],
})
export class TypographyPage {
	sizes = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

	weights = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

	obliques = ['none', 'sm', 'md', 'lg'];

	monos = ['none', 'sm', 'md', 'lg', 'xl', 'xxl'];

	casuals = ['none', 'sm', 'md', 'lg', 'xl', 'xxl'];
}
