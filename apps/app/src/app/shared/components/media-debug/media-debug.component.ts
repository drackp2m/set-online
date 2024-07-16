import { Component } from '@angular/core';

@Component({
	standalone: true,
	selector: 'set-media-debug',
	template: `<ul class="flex-row gap-sm lg:gap-md">
		<li class="round-sm p-xs px-sm surface-radiant color-vivid xs-e:hide">xs</li>
		<li class="round-sm p-xs px-sm surface-radiant color-vivid sm-e:hide">sm</li>
		<li class="round-sm p-xs px-sm surface-radiant color-vivid md-e:hide">md</li>
		<li class="round-sm p-xs px-sm surface-radiant color-vivid lg-e:hide">lg</li>
		<li class="round-sm p-xs px-sm surface-radiant color-vivid xl-e:hide">xl</li>
	</ul>`,
})
export class MediaDebugComponent {}
