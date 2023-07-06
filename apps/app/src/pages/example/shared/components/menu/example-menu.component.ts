import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'set-example-menu',
	imports: [RouterModule],
	template: `
		<nav>
			<ul class="flex-row my-md gap-sm">
				<li class="round-sm p-xs px-sm surface-vivid"><a routerLink="/example">Example</a></li>

				<li class="round-sm p-xs px-sm surface-vivid">
					<a routerLink="/example/typographies">Typographies</a>
				</li>

				<li class="round-sm p-xs px-sm surface-vivid">
					<a routerLink="/example/shadows">shadows</a>
				</li>
			</ul>
		</nav>
	`,
})
export default class ExampleMenuComponent {}
