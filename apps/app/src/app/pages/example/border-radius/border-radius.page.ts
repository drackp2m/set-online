import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './border-radius.page.html',
	styleUrl: './border-radius.page.scss',
	imports: [ExampleMenuComponent, NgFor],
})
export default class BorderRadiusPage {
	rounds = ['none', 'sm', 'md', 'lg'];
}
