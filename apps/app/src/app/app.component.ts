import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Apollo } from 'apollo-angular';

import { SendPingGQL } from '../graphql/apollo-operations';

import { pingValue } from './app.config';
import { GetUserInfoGQL } from './graphql/apollo-operations';
import { CurrentUserStore } from './stores/current-user.store';

@Component({
	standalone: true,
	selector: 'set-root',
	template: `<router-outlet />`,
	imports: [RouterOutlet],
	providers: [CurrentUserStore, Apollo, GetUserInfoGQL, SendPingGQL],
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
