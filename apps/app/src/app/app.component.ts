import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Apollo } from 'apollo-angular';

import { GetUserInfoGQL } from './graphql/apollo-operations';
import { CurrentUserStore } from './stores/current-user.store';

@Component({
	standalone: true,
	selector: 'set-root',
	template: `<router-outlet />`,
	imports: [RouterOutlet],
	providers: [CurrentUserStore, Apollo, GetUserInfoGQL],
})
export class AppComponent implements OnInit {
	private readonly currentUserStore = inject(CurrentUserStore);

	title = 'app';

	ngOnInit() {
		void this.currentUserStore.fetchData();
	}
}
