import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SendPingGQL } from '@playsetonline/apollo-definitions';

import { pingValue } from './app.config';

import { version } from '@package';

@Component({
	standalone: true,
	selector: 'app-root',
	template: `<router-outlet />
		<span id="app-version" class="text-sm align-self-center mb-md" [attr.data-text]="'v' + version">
			v{{ version }}
		</span>`,
	styles: `
		:host {
			display: flex;
			flex-direction: column;

			#app-version {
				position: fixed;
				bottom: 0;

				position: fixed;
				color: rgb(255 255 255 / 90%);

				&::before {
					content: attr(data-text);
					position: absolute;
					-webkit-text-stroke: 2px rgb(0 0 0 / 30%);
					z-index: -1;
				}
			}
		}
	`,
	imports: [RouterOutlet],
	providers: [SendPingGQL],
})
export class AppComponent {
	private readonly sendPing = inject(SendPingGQL);

	private readonly pingValue = pingValue;

	version = version;

	title = 'app';

	constructor() {
		effect(() => {
			const pingValue = this.pingValue();

			if (pingValue !== undefined) {
				this.sendPing.mutate({ input: { pingValue } }).subscribe();
			}
		});
	}
}
