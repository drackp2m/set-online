import { Component, OnInit, inject } from '@angular/core';
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
export class AppComponent implements OnInit {
	private readonly currentUserStore = inject(CurrentUserStore);

	title = 'app';

	ngOnInit() {
		this.currentUserStore.fetchData();
	}
}
