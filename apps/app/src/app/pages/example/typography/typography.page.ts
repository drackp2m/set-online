import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './typography.page.html',
	styleUrls: ['./typography.page.scss'],
	imports: [ExampleMenuComponent, NgFor],
})
export default class TypographyPage {
	sizes = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

	weights = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'];

	obliques = ['none', 'sm', 'md', 'lg'];

	monos = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];

	casuals = ['none', 'xs', 'sm', 'md', 'lg', 'xl'];
}
