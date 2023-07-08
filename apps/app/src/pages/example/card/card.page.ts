import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './card.page.html',
	styleUrls: ['./card.page.scss'],
	imports: [ExampleMenuComponent, NgFor, NgIf],
})
export default class CardPage {
	colors = ['red', 'purple', 'green'];

	shapes = [
		'oval-solid',
		'oval-striped',
		'oval-outlined',
		'squiggle-solid',
		'squiggle-striped',
		'squiggle-outlined',
		'diamond-solid',
		'diamond-striped',
		'diamond-outlined',
	];

	needPattern(shape: string): boolean {
		return shape.includes('striped');
	}
}
