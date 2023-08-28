import { Injectable } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';
import { stateHistory } from '@ngneat/elf-state-history';

import { GetUserInfoGQL, GetUserInfoQuery } from '../graphql/apollo-operations';
import { BaseState, getInitialBaseState } from '../shared/stores/base-state.interface';

type UserInfo = GetUserInfoQuery['getUserInfo'];

interface StateProps extends BaseState<UserInfo> {}

export const store = createStore(
	{ name: 'currentUser' },
	withProps<StateProps>(getInitialBaseState()),
);

export const storeHistory = stateHistory(store, {
	maxAge: 10,
});

@Injectable({ providedIn: 'root' })
export class CurrentUserStore {
	state$ = store;

	constructor(private readonly getUserInfoGQL: GetUserInfoGQL) {}

	fetchData(): void {
		console.log('init');

		store.update((state) => ({
			...state,
			loading: true,
		}));

		console.log('first update');

		this.getUserInfoGQL.fetch().subscribe({
			next: ({ data }) => {
				console.log(data);

				store.update((state) => ({
					...state,
					data: data.getUserInfo,
					loading: false,
					error: null,
					lastFetch: new Date(),
				}));
			},
			error: (error) => {
				console.log(error);

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
