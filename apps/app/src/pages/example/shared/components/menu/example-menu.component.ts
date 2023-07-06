import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	selector: 'set-example-menu',
	imports: [RouterModule],
	template: `
		<nav>
			<ul class="fl-rw my-md gap-sm">
				<li class="br-sm p-xs px-sm bg-vivid"><a routerLink="/example">Example</a></li>

				<li class="br-sm p-xs px-sm bg-vivid">
					<a routerLink="/example/typographies">Typographies</a>
				</li>
			</ul>
		</nav>
	`,
})
export default class ExampleMenuComponent {}
