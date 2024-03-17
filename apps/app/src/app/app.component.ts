import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Apollo } from 'apollo-angular';

import { GetUserInfoGQL } from './graphql/apollo-operations';
import { CurrentUserStore } from './stores/current-user.store';

@Component({
	standalone: true,
	selector: 'set-root',
	template: `<router-outlet></router-outlet>`,
	imports: [RouterOutlet],
	providers: [CurrentUserStore, GetUserInfoGQL, Apollo],
})
export class AppComponent {
	private readonly currentUserStore = inject(CurrentUserStore);

	title = 'app';

	constructor() {
		this.currentUserStore.fetchData();
	}
}
