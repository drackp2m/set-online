import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { CardColorEnum, CardShadingEnum, CardShapeEnum } from '@set-online/api-definitions';

import { CardShapeComponent } from '../../../shared/components/card-shape/card-shape.component';
import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './card.page.html',
	styleUrls: ['./card.page.scss'],
	imports: [ExampleMenuComponent, CardShapeComponent, NgFor, NgIf],
})
export default class CardPage {
	shapes: (keyof typeof CardShapeEnum)[] = ['oval', 'squiggle', 'diamond'];
	colors: (keyof typeof CardColorEnum)[] = ['red', 'purple', 'green'];
	shadings: (keyof typeof CardShadingEnum)[] = ['solid', 'striped', 'outlined'];
}
