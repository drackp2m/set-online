import { Component } from '@angular/core';

import ExampleMenuComponent from '../../component/menu/example-menu.component';

@Component({
	standalone: true,
	imports: [ExampleMenuComponent],
	styles: `
		main {
			min-height: 100%;
			background-color: white;
		}
	`,
	template: `<main id="border-radius" class="content-fixed flex-col gap-xl pt-lg pb-xxl">
		<app-example-menu />

		<h2>Welcome to Border radius!</h2>

		<div class="flex-col gap-md">
			<h3>Border radius sizes</h3>

			<section class="flex-row flex-wrap gap-xl">
				@for (round of rounds; track $index) {
					<div class="flex-col align-center justify-end gap-md">
						<div class="surface-vivid px-xxxl py-xl" [class]="'round-' + round"></div>

						<h5>{{ round }}</h5>
					</div>
				}
			</section>
		</div>
	</main> `,
})
export class BorderRadiusPage {
	rounds = ['none', 'sm', 'md', 'lg'];
}
