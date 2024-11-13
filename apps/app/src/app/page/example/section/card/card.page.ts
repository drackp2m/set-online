import { Component } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@playsetonline/api-definitions';

import { CardComponent } from '../../../../component/card/card.component';
import { CardShapeComponent } from '../../../../component/card-shape/card-shape.component';
import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	standalone: true,
	templateUrl: './card.page.html',
	styleUrl: './card.page.scss',
	imports: [ExampleMenuComponent, CardShapeComponent, CardComponent],
})
export class CardPage {
	shapes: CardShape[] = [CardShape.diamond, CardShape.oval, CardShape.squiggle];
	colors: CardColor[] = [CardColor.green, CardColor.purple, CardColor.red];
	shadings: CardShading[] = [CardShading.outlined, CardShading.solid, CardShading.striped];
	counts: number[] = [1, 2, 3];
}
