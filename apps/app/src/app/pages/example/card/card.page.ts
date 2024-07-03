import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@set-online/api-definitions';

import { CardComponent } from '../../../shared/components/card/card.component';
import { CardShapeComponent } from '../../../shared/components/card-shape/card-shape.component';
import ExampleMenuComponent from '../shared/components/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './card.page.html',
	styleUrl: './card.page.scss',
	imports: [ExampleMenuComponent, CardShapeComponent, CardComponent, NgFor, NgIf],
})
export default class CardPage {
	shapes: (keyof typeof CardShape)[] = ['oval', 'squiggle', 'diamond'];
	colors: (keyof typeof CardColor)[] = ['red', 'purple', 'green'];
	shadings: (keyof typeof CardShading)[] = ['solid', 'striped', 'outlined'];
	counts: number[] = [1, 2, 3];
}
