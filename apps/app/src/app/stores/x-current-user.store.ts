import { NgModule, inject } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';
import { stateHistory } from '@ngneat/elf-state-history';
import { take } from 'rxjs';

import { GetUserInfoGQL, GetUserInfoQuery } from '../graphql/apollo-operations';
import { BaseState, getInitialBaseState } from '../shared/stores/base-state.interface';

type UserInfo = GetUserInfoQuery['getUserInfo'];

export const store = createStore(
	{ name: 'currentUser' },
	withProps<BaseState<UserInfo>>(getInitialBaseState()),
);

export const storeHistory = stateHistory(store, {
	maxAge: 10,
});

@NgModule({})
export class XCurrentUserStore {
	private readonly getUserInfoGQL = inject(GetUserInfoGQL);

	state$ = store;

	fetchData(): void {
		store.update((state) => ({
			...state,
			loading: true,
		}));

		this.getUserInfoGQL
			.fetch()
			.pipe(take(1))
			.subscribe({
				next: ({ data }) => {
					store.update((state) => ({
						...state,
						data: data.getUserInfo,
						loading: false,
						error: null,
						lastFetch: new Date(),
					}));
				},
				error: (error) => {
					store.update((state) => {
						const details = error.graphQLErrors[0]?.extensions.details;

						return {
							...state,
							loading: false,
							error: details,
						};
					});
				},
			});
	}

	reset(): void {
		store.update(getInitialBaseState<UserInfo>);
	}
}
