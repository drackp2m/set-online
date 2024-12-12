import { Component } from '@angular/core';

import { CardColor, CardShading, CardShape } from '@playsetonline/api-definitions';

import { CardComponent } from '../../../../component/card/card.component';
import { CardShapeComponent } from '../../../../component/card-shape/card-shape.component';
import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	templateUrl: './card.page.html',
	styleUrl: './card.page.scss',
	imports: [ExampleMenuComponent, CardShapeComponent, CardComponent],
})
export class CardPage {
	shapes: CardShape[] = [CardShape.DIAMOND, CardShape.OVAL, CardShape.SQUIGGLE];
	colors: CardColor[] = [CardColor.GREEN, CardColor.PURPLE, CardColor.RED];
	shadings: CardShading[] = [CardShading.OUTLINED, CardShading.SOLID, CardShading.STRIPED];
	counts: number[] = [1, 2, 3];
}
