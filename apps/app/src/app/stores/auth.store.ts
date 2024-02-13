import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import { stateHistory } from '@ngneat/elf-state-history';
import { Observable, filter, take } from 'rxjs';

import { ApiClient } from '../shared/services/api-client.service';

interface StateProps {
	tokensAreValid: boolean;
	loading: boolean;
}

const store = createStore(
	{ name: 'auth' },
	withProps<StateProps>({
		tokensAreValid: true,
		loading: false,
	}),
);

stateHistory(store, {
	maxAge: 10,
});

@Injectable({ providedIn: 'root' })
export class AuthStore {
	state$ = store;

	constructor(private readonly ApiClient: ApiClient) {}

	get tokensAreValid(): boolean {
		return store.getValue().tokensAreValid;
	}

	get isLoading(): boolean {
		return store.getValue().loading;
	}

	get loadingIsFinished$(): Observable<boolean> {
		return store.pipe(
			filter((state) => !state.loading),
			take(1),
			select((state) => state.loading),
		);
	}

	tryToRefreshTokens(): void {
		store.update(() => ({
			loading: true,
			tokensAreValid: false,
		}));

		this.ApiClient.auth.get('/refresh-session').subscribe({
			next: () => {
				store.update(() => ({
					loading: false,
					tokensAreValid: true,
				}));
			},
			error: () => {
				store.update((state) => ({
					...state,
					loading: false,
				}));
			},
		});
	}
}
