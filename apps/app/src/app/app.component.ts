import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Apollo } from 'apollo-angular';

import { GetUserInfoGQL, SendPingGQL } from '@set-online/apollo-definitions';

import { pingValue } from './app.config';
import { CurrentUserStore } from './stores/current-user.store';

@Component({
	standalone: true,
	selector: 'set-root',
	template: `<router-outlet />`,
	imports: [RouterOutlet],
	providers: [Apollo, CurrentUserStore, GetUserInfoGQL, SendPingGQL],
})
export class AppComponent implements OnInit {
	private readonly currentUserStore = inject(CurrentUserStore);

	private readonly sendPing = inject(SendPingGQL);

	private readonly pingValue = pingValue;

	title = 'app';

	constructor() {
		effect(() => {
			const pingValue = this.pingValue();

			console.log({ pingValue });

			if (pingValue !== undefined) {
				this.sendPing.mutate({ input: { pingValue } }).subscribe((val) => console.log(val));
			}
		});
	}

	ngOnInit() {
		void this.currentUserStore.fetchData();
	}
}
