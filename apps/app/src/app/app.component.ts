import { Component } from '@angular/core';

import { CurrentUserStore } from '../stores/current-user.store';

@Component({
	selector: 'set-app',
	template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
	constructor(private readonly currentUserStore: CurrentUserStore) {
		this.currentUserStore.fetchData();
	}
}
