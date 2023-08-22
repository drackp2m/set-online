import { Injectable } from '@angular/core';
import { createStore, withProps } from '@ngneat/elf';
import { stateHistory } from '@ngneat/elf-state-history';

import { GetUserInfoGQL, GetUserInfoQuery } from '../graphql/apollo-operations';
import { BaseState, getInitialBaseState } from '../shared/stores/base-state.interface';

interface StateProps extends BaseState<GetUserInfoQuery['getUserInfo']> {}

export const store = createStore(
	{ name: 'currentUser' },
	withProps<StateProps>(getInitialBaseState()),
);

export const storeHistory = stateHistory(store, {
	maxAge: 10,
});

@Injectable({ providedIn: 'root' })
export class CurrentUserStore {
	state$ = store.asObservable();

	constructor(private readonly getUserInfoGQL: GetUserInfoGQL) {}

	fetchData(): void {
		store.update((state) => ({
			...state,
			loading: true,
		}));

		this.getUserInfoGQL.fetch().subscribe({
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
					const details = error.graphQLErrors[0].extensions.details;

					console.log(details);

					return {
						...state,
						loading: false,
						// error: JSON.parse(details),
					};
				});
			},
		});
	}
}
