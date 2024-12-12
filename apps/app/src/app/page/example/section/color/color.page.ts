import { Component } from '@angular/core';

import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	templateUrl: './color.page.html',
	imports: [ExampleMenuComponent],
})
export class ColorPage {
	colors = ['cosmic', 'radiant', 'harmony', 'vivid', 'serene'];
}
