import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './color.page.html',
	styleUrl: './color.page.scss',
	imports: [NgFor, ExampleMenuComponent],
})
export default class ColorPage {
	colors = ['cosmic', 'radiant', 'harmony', 'vivid', 'serene'];
}
